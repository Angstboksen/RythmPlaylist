import ytdl from 'ytdl-core'
import fs from 'fs'
import QueueConstruct from './QueueConstruct.js'
import Song from './Song.js'
import { MessageEmbed } from 'discord.js'
import Playlist from './Playlist.js'
import HELPERS from './helpers.js'

class RythmPlaylist {

    constructor(message, voiceChannel) {
        this.commands = this._fetchAllCommands()
        this.textChannel = message.channel
        this.voiceChannel = voiceChannel
        this.queue = new QueueConstruct(null, null, null)
        this.file = process.env.PLAYLIST_FILE
    }

    writeTullekopp() {
        this.textChannel.send(":liar: **Tullekopp, det er jo ikke en gyldig kommando** :poop:")
    }

    execute(message) {
        this.textChannel = message.channel
        this.voiceChannel = message.member.voice.channel
        let args = message.content.slice(4).split(' ');
        args.map(a => a = a.toLowerCase())
        const givenCommand = args[0]
        if (this.commandExists(givenCommand)) {
            const command = this.commands[givenCommand]
            if (!HELPERS.validateCommandLength(args, command.validLength)) {
                this.writeTullekopp()
                return
            }
            command.run(message, args)
        } else {
            this.writeTullekopp()
        }
    }

    getCommands() {
        return this.commands
    }

    getCommandList() {
        return Object.keys(this.commands)
    }

    commandExists(command) {
        return this.getCommandList().includes(command)
    }

    alreadyJoined() {
        for (let user of this.voiceChannel.members) {
            if (user[0] === process.env.BOT_ID) {
                return true
            }
        }
        return false
    }

    async _writeToFile(obj) {
        let json = JSON.stringify(obj);
        return await new Promise((resolve, reject) => {
            fs.writeFile(this.file, json, (err) => {
                if (err) resolve(false);
                console.log('The file has been saved!');
                resolve(true)
            });
        })
    }

    async _readFile() {
        return await new Promise((resolve, reject) => {
            fs.readFile(this.file, function readFileCallback(err, data) {
                if (err) {
                    resolve(null);
                }
                else {
                    const obj = JSON.parse(data);
                    resolve(obj)
                }
            })
        });
    }


    async createNewList(name, sender) {
        let saved = false
        if (name.length <= 0 || name.length > 20) {
            saved = false
        }
        const obj = await this._readFile()
        if (obj) {
            const exists = HELPERS.playListExists(name.toLowerCase(), obj)
            if (exists) {
                saved = false
            } else {
                const newList = new Playlist(name, [], sender, [sender])
                obj.playlists.push(newList)
                saved = this._writeToFile(obj);
            }
        }
        saved ? this.textChannel.send(":white_check_mark: **Mekka ny liste til deg ladden: ** `" + name + "` - **Administrator:** `" + sender + "`")
            : this.textChannel.send(":x: **Kunne ikke mekke ny liste med navn: ** `" + name + "`")
    }

    async validateAddCredentials(args) {
        const playlistname = args[1]
        const url = args[2]
        const obj = await this._readFile()
        return HELPERS.playListExists(playlistname, obj) && HELPERS.matchYoutubeUrl(url)
    }

    async addSongToList(args, user) {
        const playlistname = args[1]
        const obj = await this._readFile()
        const playlists = obj.playlists
        let instance = HELPERS.getPlaylistInstance(playlistname, playlists)
        if (!instance) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
            return
        }
        let url = args[2].match(HELPERS.ytRegex)
        if (!url) {
            this.textChannel.send(":rotating_light: **Ugyldig link** :rotating_light:")
            return
        }
        url = url[0]
        try {
            const song = await ytdl.getInfo(url)
            const filtered = new Song(song.video_url, song.title, parseInt(song.length_seconds))
            if (!instance.trustedusers.includes(user.replace(/\s+/g, ''))) {
                this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
                return
            }
            let exists = instance.hasSong(filtered.url)
            if (!exists) {
                instance.songs.push(filtered)
                this.textChannel.send(":white_check_mark: **La til: **" + "`" + filtered.title + "` **i listen** :scroll:")
                this._writeToFile(obj)
                this.enqueue(filtered)

            } else {
                this.textChannel.send(":rotating_light: **Sangen finnes allerede i listen!** :rotating_light:")
            }
        } catch (e) {
            this.textChannel.send(":rotating_light: **Denne linken finnes ikke** :rotating_light:")
        }
    }

    enqueue(song) {
        if (this.queue) {
            this.queue.enqueue(song)
            if (this.queue.playing) {
                this.showQueue()
            }
        }
    }

    async showQueue() {
        this.textChannel.send(await this.queue.show())
    }

    async validateTrustCredentials(args) {
        const playlistname = args[1]
        const user = args[2]
        const regex = /[A-z](.*)#(\d{4})/
        const obj = await this._readFile()
        return HELPERS.playListExists(playlistname, obj) && user.match(regex)
    }

    async trustUser(message, args) {
        const admin = message.member.user.tag
        const playlistname = args[1]
        const trusted = args[2]
        if (admin === trusted) {
            this.textChannel.send(":thinking: **Du stoler brått allerede på deg selv, eller?** :thinking:")
            return
        }

        const obj = await this._readFile()
        const playlists = obj.playlists
        let instance = HELPERS.getPlaylistInstance(playlistname, playlists)
        if (!instance) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
            return
        }
        if (!instance.creator === admin) {
            message.channel.send(":police_car: :cop: **Dette er jo ikke din liste** :scroll: :rotating_light:")
            return
        }
        instance.addTrustedUser(trusted)
        this.textChannel.send(":white_check_mark: **Du stoler på at: **" + "`" + trusted + "` **ikke fucker opp listen din** :scroll:")
        this._writeToFile(obj)
    }

    async listall() {
        const obj = await this._readFile()
        let msg = ":mag_right: **Antall lister: **" + "`" + obj.playlists.length + "` \n"
        let count = 0
        for (let list of obj.playlists) {
            count++
            const amount = list.songs.length
            msg += ":printer: **Liste: **" + "`" + list.name + "`" + " | **Antall sanger:** " + "`" + amount + "`" + " | **Administrator:** " + "`" + list.creator + "` :scroll: \n"
        }
        if (count === 0) {
            msg = ":clown: **Fant ingen lister :rolling_eyes: Du kan lage en ny en ved å bruke: **" + "`!pp create <navn_på_liste>`"
        }
        this.textChannel.send(msg)
    }

    async startPlaylist(name, shuffle = false) {
        const obj = await this._readFile()
        const playlists = obj.playlists
        const playlist = HELPERS.getPlaylistInstance(name, playlists)
        if (playlist.size() <= 0) {
            this.textChannel.send(":clown: **Spillelisten: **" + "`" + name + "` **har ingen sanger** :clown:")
            return
        }
        this.connection = await this.voiceChannel.join()
        let songs = playlist.getSongs(shuffle)
        this.queue = new QueueConstruct(this.textChannel, this.voiceChannel, this.connection, songs)
        this.play()
    }

    async play() {
        if (this.queue.size() <= 0) {
            this.queue.playing = false
            this.textChannel.send(":white_check_mark: :scroll: **Da var denne køen ferdig for denne gang!** :white_check_mark:")
            this.voiceChannel.leave();
            return;
        }

        try {
            this.queue.playing = true
            const song = this.queue.next()

            const estimatedtime = await this.queue.getEstimatedTime()

            const dispatcher = this.connection
                .play(ytdl(song.url), { filter: 'audioonly' })
                .on("finish", () => {
                    this.play();
                })
                .on("error", error => this.textChannel.send(":disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken: **" + "`" + song.url + "` :rotating_light:"));
            dispatcher.setVolumeLogarithmic(this.queue.volume / 5)
            this.queue.dequeue();
            let text =
                ":notes: **Tittel: **" + song.title + "\n" +
                ":beginner: **Youtube link: **" + song.url + "\n" +
                ":arrows_counterclockwise: **Antall sanger fortsatt i køen:** " + this.queue.size() + "\n" +
                ":timer: **Beregnet total tid: **" + estimatedtime
            let embed = new MessageEmbed()
            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            this.textChannel.send(embed)
        } catch (e) {
            console.log(e)
            this.textChannel.send(":disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken: **" + "`" + song.url + "` :rotating_light:")
        }
    }

    skip(channel) {
        if (!channel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
        }
        this.connection.dispatcher.end()
        this.textChannel.send(":mage: **Skippetipangen, bort med den sangen!** :no_entry:")
    }

    stop(channel) {
        if (!channel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
        }
        this.textChannel.send(":mage: **Fjernet alle sanger fra køen! ** :pencil2:")
        this.queue.songs = []
        this.connection.dispatcher.end()
    }

    _fetchAllCommands() {
        return {
            'play': {
                name: "play",
                validLength: 2,
                run: async (message, args) => {
                    try {
                        this.connection = await this.voiceChannel.join();
                        const song = await ytdl.getInfo(args[1])
                        const filtered = new Song(song.title, song.video_url, parseInt(song.length_seconds))
                        if (this.queue && this.queue.playing) {
                            this.enqueue(filtered)
                            return
                        }
                        this.queue = new QueueConstruct(this.textChannel, this.voiceChannel, this.connection, [filtered])
                        this.play();

                    } catch (e) {
                        this.textChannel.send(":x: **Dette er ikke en gyldig URL** :x:")
                    }
                }
            },

            'cum': {
                name: "cum",
                validLength: 1,
                run: (message, args) => {
                    if (!this.alreadyJoined()) {
                        this.textChannel.send(":kissing_heart: **Okei her kommer jeg** :heart_eyes:")
                        this.voiceChannel.join()
                    }
                }
            },

            'leave': {
                name: "leave",
                validLength: 1,
                run: (message, args) => {
                    if (this.alreadyJoined()) {
                        this.textChannel.send(":x: **Aight Imma head out!** :disappointed_relieved: :zipper_mouth:")
                        this.voiceChannel.leave()
                    }
                }
            },

            'create': {
                name: "create",
                validLength: 2,
                run: async (message, args) => {
                    const sender = message.member.user.tag
                    this.createNewList(args[1], sender)
                }
            },

            'add': {
                name: "add",
                validLength: 3,
                run: (message, args) => {
                    if (this.validateAddCredentials(args)) {
                        const user = message.member.user.tag
                        this.addSongToList(args, user)
                    } else {
                        this.textChannel.send(":thinking: **Det er ikke måten man legger til en sang i en liste på** :joy: :joy: ")
                    }

                }
            },

            'trust': {
                name: "trust",
                validLength: 3,
                run: async (message, args) => {
                    if (await this.validateTrustCredentials(args)) {
                        this.trustUser(message, args)
                    } else {
                        this.textChannel.send(":thinking: **Det er ikke måten man legger til en trusted bruker i en liste** :joy: :joy: ")
                    }
                }
            },

            'listall': {
                name: "listall",
                validLength: 1,
                run: async (message, args) => { await this.listall() }
            },

            'playlist': {
                name: "playlist",
                validLength: 2,
                run: async (message, args) => {
                    const playlist = args[1]
                    const obj = await this._readFile()
                    if (HELPERS.playListExists(playlist, obj)) {
                        this.startPlaylist(playlist)
                    } else {
                        this.textChannel.send(":thinking: **Spillelisten finnes ikke** :joy: :joy: ")
                    }
                }

            },

            'skip': {
                name: 'skip',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.skip(channel)
                }
            },

            'stop': {
                name: 'stop',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.stop(channel)
                }
            },

            'queue': {
                name: 'queue',
                validLength: 1,
                run: (message, args) => {
                    this.showQueue()
                }
            },

            'shuffle': {
                name: 'shuffle',
                validLength: 2,
                run: async (message, args) => {
                    const playlist = args[1]
                    const obj = await this._readFile()
                    if (HELPERS.playListExists(playlist, obj)) {
                        this.startPlaylist(playlist, true)
                    } else {
                        this.textChannel.send(":thinking: **Spillelisten finnes ikke** :joy: :joy: ")
                    }

                }
            }
        }
    }
}



export default RythmPlaylist
