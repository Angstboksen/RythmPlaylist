

const ytdl = require('ytdl-core');
const fs = require('fs');
const _file_ = process.env.PLAYLIST_FILE

let obj = {
    playlists: []
};

_validateCommandLength = (args, length, message) => {
    if (args.length !== length) {
        message.channel.send(":liar: **Tullekopp, det er jo ikke en gyldig kommando** :poop:")
        return false
    }
    return true
}

playListExists = async (name) => {
    return await new Promise((resolve, reject) => {
        fs.readFile(_file_, function readFileCallback(err, data) {
            if (err) {
                reject(err);
            }
            else {
                obj = JSON.parse(data);
                for (let playlist of obj.playlists) {
                    if (playlist.name === name) {
                        resolve(true)
                        return
                    }
                }
                resolve(false)
            }
        })
    })
}

writeToFile = async (obj) => {
    let json = JSON.stringify(obj);
    return await new Promise((resolve, reject) => {
        fs.writeFile(_file_, json, (err) => {
            if (err) reject(err);
            console.log('The file has been saved!');
            resolve(true)
        });
    })
}

_createNewList = async (playlistname, user) => {
    if (playlistname.length <= 0 || playlistname.length > 20) return false
    return await new Promise((resolve, reject) => {
        fs.readFile(_file_, async function readFileCallback(err, data) {
            if (err) {
                reject(err);
            }
            else {
                obj = JSON.parse(data);
                const exists = await playListExists(playlistname.toLowerCase())
                if (exists) {
                    resolve(false)
                } else {
                    obj.playlists.push({
                        name: playlistname,
                        urls: [],
                        creator: user,
                        trustedusers: [user]
                    })
                    resolve(writeToFile(obj));
                }
            }
        });
    })
}

_printObject = (obj) => {
    let msg = ":mag_right: **Antall lister: **" + "`" + obj.playlists.length + "` \n"
    let count = 0
    for (let list of obj.playlists) {
        count++
        const amount = list.urls.length
        msg += ":printer: **Liste: **" + "`" + list.name + "`" + " | **Antall sanger:** " + "`" + amount + "`" + " | **Administrator:** " + "`" + list.creator + "` :scroll: \n"
    }
    if (count === 0) {
        msg = ":clown: **Fant ingen lister :rolling_eyes: Du kan lage en ny en ved å bruke: **" + "`!pp create <navn_på_liste>`"
    }
    return msg
}

_readFile = (message) => {
    fs.readFile(_file_, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            obj = JSON.parse(data);
            message.channel.send(_printObject(obj))
        }
    });
}

alreadyJoined = (channel) => {
    for (let user of channel.members) {
        if (user[0] === process.env.BOT_ID) {
            return true
        }
    }
    return false
}

matchYoutubeUrl = (url) => {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
        return true;
    }
    return false;
}

_validAddCredentials = (args) => {
    const playlistname = args[1]
    const url = args[2]
    return playListExists(playlistname) && matchYoutubeUrl(url)
}

getPlaylistInstance = (name, list) => {
    for (let playlist of list) {
        if (playlist.name === name) {
            return playlist
        }
    }
    return undefined
}

_addSongToList = async (message, args) => {
    const playlistname = args[1]
    const url = args[2]
    return await new Promise((resolve, reject) => {
        fs.readFile(_file_, function readFileCallback(err, data) {
            if (err) {
                reject(err);
            }
            else {
                const obj = JSON.parse(data)
                const playlists = obj.playlists
                let instance = getPlaylistInstance(playlistname, playlists)
                if (!instance.trustedusers.includes(message.member.user.tag)) {
                    message.channel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
                }

                if (!instance.urls.includes(url)) {
                    instance.urls.push(url)
                    message.channel.send(":white_check_mark: **La til url: **" + "`" + url + "` **i listen** :scroll:")
                    resolve(writeToFile(obj))
                } else {
                    message.channel.send(":rotating_light: **Sangen finnes allerede i listen!** :rotating_light:")
                    resolve(false)
                }

            }
        });
    })

}

_trustUser = async (message, args) => {
    const admin = message.member.user.tag
    const playlistname = args[1]
    const trusted = args[2]
    if(admin === trusted) {
        message.channel.send(":thinking: **Du stoler brått allerede på deg selv, eller?** :thinking:")
        return
    }
    return await new Promise((resolve, reject) => {
        fs.readFile(_file_, function readFileCallback(err, data) {
            if (err) {
                reject(err);
            }
            else {
                const obj = JSON.parse(data)
                const playlists = obj.playlists
                let instance = getPlaylistInstance(playlistname, playlists)
                if (!instance.creator === admin) {
                    message.channel.send(":police_car: :cop: **Dette er jo ikke din liste** :scroll: :rotating_light:")
                }
                instance.trustedusers.push(trusted)
                message.channel.send(":white_check_mark: **Du stoler på at: **" + "`" + trusted + "` **ikke fucker opp listen din** :scroll:")
                resolve(writeToFile(obj))
            }

        });

    })
}

_validateTrustCredentials = (args) => {
    const playlistname = args[1]
    const user = args[2]
    const regex = /[A-z](.*)#(\d{4})/
    return playListExists(playlistname) && user.match(regex)
}

exports.commands = function () {
    return {
        play: {
            run: async (channel, message, args, playlistname = "") => {
                if (!_validateCommandLength(args, 2, message)) return
                const connection = await channel.join();
                if (playlistname == "") {
                    message.channel.send(":arrow_forward: **Now playing: ** `" + args[1] + "` ")
                    connection.play(ytdl(args[1], { filter: 'audioonly' }));
                } else {

                }
            }
        },

        cum: {
            run: (channel, message, args) => {
                if (!_validateCommandLength(args, 1, message)) return
                if (!alreadyJoined(channel)) {
                    message.channel.send(":kissing_heart: **Okei her kommer jeg** :heart_eyes:")
                    channel.join()
                }
            }
        },

        create: {
            run: async (channel, message, args) => {
                if (!_validateCommandLength(args, 2, message)) return
                const saved = await _createNewList(args[1], message.member.user.tag)
                if (saved) {
                    message.channel.send(":white_check_mark: **Mekka ny liste til deg ladden: ** `" + args[1] + "` - **Administrator:** `" + message.member.user.tag + "`")
                } else {
                    message.channel.send(":x: **Kunne ikke mekke ny liste med navn: ** `" + args[1] + "`")
                }
            }
        },

        add: {
            run: (channel, message, args) => {
                if (!_validateCommandLength(args, 3, message)) return
                if (_validAddCredentials(args)) {
                    _addSongToList(message, args)
                } else {
                    message.channel.send(":thinking: **Det er ikke måten man legger til en sang i en liste på** :joy: :joy: ")
                }

            }
        },

        kick: {
            run: (channel, message, args) => {
                if (!_validateCommandLength(args, 1, message)) return
                if (alreadyJoined(channel)) {
                    message.channel.send(":x: **Aight Imma head out!** :disappointed_relieved: :zipper_mouth:")
                    channel.leave()
                } else {
                    message.channel.send(":nerd: **Bro, jeg er jo ikke der engang...**")
                }
            }
        },

        trust: {
            run: (channel, message, args) => {
                if (!_validateCommandLength(args, 3, message)) return
                if(_validateTrustCredentials(args)){
                    _trustUser(message, args)
                }else {
                    message.channel.send(":thinking: **Det er ikke måten man legger til en trusted bruker i en liste** :joy: :joy: ")
                }
            }
        },

        listall: {
            run: (channel, message, args) => { _readFile(message) }
        }
    }
}
