

const ytdl = require('ytdl-core');
const fs = require('fs');
const _file_ = process.env.PLAYLIST_FILE

_validateCommandLength = (args, length, message) => {
    if (args.length !== length) {
        message.channel.send(":liar: Tullekopp, det er ikke en gyldig kommando :poop:")
        return false
    }
    return true
}

let obj = {
    playlists: []
};

playListExists = (name, playlists) => {
    for (let playlist of playlists) {
        if (playlist.name === name) {
            return true
        }
    }
    return false
}

writeToFile = async (obj, name, user) => {
    obj.playlists.push({
        name: name,
        urls: [],
        creator: user
    })
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
        fs.readFile(_file_, function readFileCallback(err, data) {
            if (err) {
                reject(err);
            }
            else {
                obj = JSON.parse(data);
                if (playListExists(playlistname.toLowerCase(), obj.playlists)) {
                    resolve(false)
                } else {
                    resolve(writeToFile(obj, playlistname, user));
                }
            }
        });
    })
}

_printObject = (obj) => {
    return obj
}

_readFile = () => {
    fs.readFile(_file_, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            obj = JSON.parse(data);
            console.log(_printObject(obj))
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

        come: {
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
                    message.channel.send(":white_check_mark: **Mekka ny liste til deg ladden: ** `" + args[1] + "` - **Administrator**: `" + message.member.user.tag + "`")
                } else {
                    message.channel.send(":x: **Kunne ikke mekke ny liste med navn: ** `" + args[1] + "`")
                }
            }
        },

        add: {
            run: (message, args) => {
                if (!_validateCommandLength(args, 3, message)) return

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

        read: {
            run: () => { _readFile() }
        }
    }
}