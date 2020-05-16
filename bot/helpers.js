
import Playlist from './Playlist.js'

const ytRegex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

const userRegex = /<@!(\d+)>/

function validateCommandLength(args, length) {
    if (length == -1) {
        return true
    }
    if (args.length !== length) {
        return false
    }
    return true
}

function matchYoutubeUrl(url) {
    return url.match(ytRegex)
}

function youtubeify(url) {
    return "https://www.youtube.com/watch?v=" + url
}

function getPlaylistInstance(name, list) {
    for (let playlist of list) {
        if (playlist.name === name) {
            return new Playlist(name, playlist.songs, playlist.creator, playlist.trustedusers)
        }
    }
    return undefined
}

function playListExists(name, obj) {
    for (let playlist of obj.playlists) {
        if (playlist.name === name) {
            return true
        }
    }
    return false
}

function formattedTime(secs) {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const a = array[i]
        array[i] = array[j]
        array[j] = a
    }
    return array
}

const HELPERS = {
    ytRegex: ytRegex,
    userRegex: userRegex,
    validateCommandLength: validateCommandLength,
    matchYoutubeUrl: matchYoutubeUrl,
    youtubeify: youtubeify,
    getPlaylistInstance: getPlaylistInstance,
    playListExists: playListExists,
    formattedTime: formattedTime,
    shuffleArray: shuffleArray

}

export default HELPERS