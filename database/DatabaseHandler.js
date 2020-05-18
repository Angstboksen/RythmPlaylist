import mysql from 'mysql'
import * as statements from './statements.js'
import Guild from '/Users/campa/Documents/projects/RythmPlaylist/bot/Guild.js';
import Playlist from '../bot/Playlist.js';
import Song from '/Users/campa/Documents/projects/RythmPlaylist/bot/Song.js';


export function createConnection() {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });
}

export async function connectAndQuery(query) {
    const con = createConnection()
    return new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) reject(err)
            con.query(query, function (err, result, fields) {
                if (err) reject(err);
                resolve(result)
            });
        });
    })
}

export async function initializeGuilds() {
    let guilds = new Map()
    let guildlist = await getAllGuilds()
    for (let g of guildlist) {
        let newg = new Guild(g.guildid, g.name)
        const playlists = await getPlaylistsByGuildId(g.guildid)
        for (let p of playlists) {
            const songitems = await getSongsInPlaylist(p.playlistid)
            let songs = []
            for (let s of songitems) {
                let songitem = await getSongByUrl(s.songurl)
                songitem = songitem[0]
                const song = new Song(songitem.url, songitem.title, songitem.length, songitem.thumbnail)
                songs.push(song)
            }
            const trusteditems = await getTrustedUsers(p.playlistid)
            let trustedusers = [p.creator]
            for (let t of trusteditems) {
                trustedusers.push(t.userid)
            }
            const newpl = new Playlist(g.guildid, p.name, songs, p.creator, trustedusers)
            newg.addPlaylist(newpl)
        }
        guilds.set(g.guildid, newg)
    }

    return guilds
}

export async function addNewGuild(id, name) {
    const existing = await connectAndQuery(statements.selectGuildById(id))
    if (existing.length === 0) {
        const result = await connectAndQuery(statements.insertIntoGuilds(id, name))
        return result
    }
    return null
}

export async function addNewPlaylistToGuild(playlist) {
    const playlistInGuild = await connectAndQuery(statements.selectPlaylistByNameAndGuildId(playlist.name, playlist.guildid))
    if (playlistInGuild.length === 0) {
        return await connectAndQuery(statements.insertIntoPlaylists(playlist))
    }
}

export async function addNewSongToPlaylist(playlist, song) {
    const songExists = await connectAndQuery(statements.selectSongByURL(song.url))
    const result = await connectAndQuery(statements.selectPlaylistByNameAndGuildId(playlist.name, playlist.guildid))
    const playlistid = result[0].playlistid

    if (songExists.length === 0) {
        await connectAndQuery(statements.insertIntoSongs(song))
        return await connectAndQuery(statements.insertIntoSongInPLaylist(song.url, playlistid))
    }

    const songInList = await connectAndQuery(statements.selectSongInPLaylist(song.url, playlistid))
    if (songInList.length === 0) {
        return await connectAndQuery(statements.insertIntoSongInPLaylist(song.url, playlistid))
    }
}

export async function addTrusteduserToPlaylist(playlist, user) {
    let result = await connectAndQuery(statements.selectPlaylistByNameAndGuildId(playlist.name, playlist.guildid))
    const playlistid = result[0].playlistid
    result = await connectAndQuery(statements.selectTrustedusersByPlaylistId(playlistid))
    let alreadyTrusted = []
    for (let trusted of result) {
        alreadyTrusted.push(trusted.userid)
    }

    if (!alreadyTrusted.includes(user)) {
        return await connectAndQuery(statements.insertIntoTrustedusers(playlistid, user))
    }
}


export async function getAllGuilds() {
    const result = await connectAndQuery(statements.selectAllGuilds())
    return result
}

export async function getPlaylistsByGuildId(guildid) {
    const result = await connectAndQuery(statements.selectAllPlaylistsInGuild(guildid))
    return result
}

export async function getSongsInPlaylist(playlistid) {
    const result = await connectAndQuery(statements.selectSongUrlInPlaylists(playlistid))
    return result
}

export async function getSongByUrl(url) {
    const result = await connectAndQuery(statements.selectSongByURL(url))
    return result
}

export async function getTrustedUsers(playlistid) {
    const result = await connectAndQuery(statements.selectTrustedusersByPlaylistId(playlistid))
    return result
}

export async function deleteSongFromList(guildid, playlistname, songurl) {
    let initial = await connectAndQuery(statements.selectPlaylistByNameAndGuildId(playlistname, guildid))
    const playlistid = initial[0].playlistid
    const result = await connectAndQuery(statements.deleteSongInList(playlistid, songurl))
    return result
}

export async function deleteListFromGuild(guildid, playlistname) {
    const result = await connectAndQuery(statements.deletePlaylistFromGuild(guildid, playlistname))
    return result
}

