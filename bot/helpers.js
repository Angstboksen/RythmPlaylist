
import Playlist from './Playlist.js'

const ytRegex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

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

function formattedTime(totalSeconds) {
    let hours = totalSeconds < 3600 ? "" : Math.floor(totalSeconds / 3600)
    hours = hours === "" ? hours : "0" + hours + ":"

    let minutes = totalSeconds < 60 ? "0" : Math.floor(totalSeconds / 60)
    minutes = minutes === 0 || minutes < 10 ? "0" + minutes : minutes

    let seconds = totalSeconds % 60
    seconds = seconds === 0 || seconds < 10 ? "0" + seconds : seconds

    let formatted = hours + minutes + ':' + seconds
    return formatted
}
const HELPERS = {
    ytRegex: ytRegex,
    validateCommandLength: validateCommandLength,
    matchYoutubeUrl: matchYoutubeUrl,
    youtubeify: youtubeify,
    getPlaylistInstance: getPlaylistInstance,
    playListExists: playListExists,
    formattedTime: formattedTime

}

export default HELPERS