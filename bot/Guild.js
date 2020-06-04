import * as db from '../database/DatabaseHandler.js'
import QueueConstruct from './QueueConstruct.js'


class Guild {

    constructor(id, name, playlists = []) {
        this.id = id
        this.name = name
        this.playlists = playlists
        this.queue = new QueueConstruct(null, null, null)
        db.addNewGuild(id, name)
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist)
        db.addNewPlaylistToGuild(playlist)
        return true
    }

    removePlaylist(playlistname) {
        let index = 0
        for(let list of this.playlists) {
            if(list.name === playlistname) {
                break;
            }
            index++
        }
        this.playlists.splice(index, 1)
        db.deleteListFromGuild(this.id, playlistname)
    }

    getPlaylistByName(playlistname) {
        for(let list of this.playlists) {
            if(list.name === playlistname) {
                return list
            }
        }
        return null
    }

    petBot(sender) {
        db.petBot(this.id, sender)
    }
}

export default Guild