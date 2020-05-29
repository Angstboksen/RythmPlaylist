import axios from "axios"
import YoutubeSearcher from "../YoutubeSearcher.js"

function getConfig(type, url, token, content_type = "application/json") {
    return {
        method: type,
        headers: { "Content-Type": content_type, "Authorization": `Bearer ${token}` },
        url: url
    }
}

class SpotifyApi {

    constructor() {
        this.token = process.env.SPOTIFY_KEY
        this.baseurl = "http://api.spotify.com/v1"
    }

    async getAllUserPlaylists(userid) {
        const url = `${this.baseurl}/users/${userid}/playlists`
        const httpconfig = getConfig("GET", url, this.token)
        try {
            let result = await axios(httpconfig)
            let playlists = result.data.items
            return playlists
        } catch (e) {
            console.log(e)
            console.log(`Something went wrong when getting the playlist for: ${userid}`)
            return null
        }
    }

    async getUserPlaylist(userid, playlistname) {
        try {
            const playlists = await this.getAllUserPlaylists(userid)
            for (let playlist of playlists) {
                if (playlist.name === playlistname) {
                    return playlist
                }
            }
            return null
        } catch (e) {
            console.log(e)
            console.log(`Something went wrong when getting the playlist: ${playlistname}`)
            return null
        }
    }

    async getSongInformation(songid) {
        const url = `${this.baseurl}/tracks/${songid}`
        const httpconfig = getConfig("GET", url, this.token)
        try {
            const result = await axios(httpconfig)
            let title = result.data.name
            let artist = result.data.artists[0].name
            return { 'title': title, 'artist': artist }
        } catch (e) {
            console.log(e)
            console.log(`Something went wrong when getting the song with id: ${songid}`)
            return null
        }
    }

    async getSongsInPlaylist(userid, playlistname, offset = 0, carry = []) {
        console.log("Getting songs!")
        try {
            const playlist = await this.getUserPlaylist(userid, playlistname)
            if (playlist) {
                const yt = new YoutubeSearcher()
                const url = `${this.baseurl}/playlists/${playlist.id}/tracks?offset=${offset}`
                const httpconfig = getConfig("GET", url, this.token)
                const result = await axios(httpconfig)
                let items = result.data.items
                let songs = carry
                for (let item of items) {
                    let songid = item.track.id
                    //console.log(item)
                    let songinfo = await this.getSongInformation(songid)
                    console.log(`${(songs.length / items.length * 100).toFixed(1)}%`)
                    let song = await yt.search(`${songinfo.title}, ${songinfo.artist}`)
                    songs.push(song)
                }
                return songs
            }
        } catch (e) {
            console.log(e)
            console.log(`Something went wrong when getting the songs for the list: ${playlistname}`)
            return null
        }
    }

    async syncPlaylistToJuanita(userid, playlistname, playlist) {
        try {
           const songs = await this.getSongsInPlaylist(userid, playlistname, 100)
            for(let song of songs) {
                if(!song || playlist.hasSong(song.url)) {
                    continue
                }
                console.log("Adding song: " + song.title)
                
                playlist.addSong(song)
            }
        } catch (e) {
            console.log(e)
            console.log(`Something went wrong when syncing the playlist: ${playlistname}`)
            return false
        }
    }
}

export default SpotifyApi