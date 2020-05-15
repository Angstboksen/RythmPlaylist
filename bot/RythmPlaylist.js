import ytdl from 'ytdl-core'
import fs from 'fs'
import QueueConstruct from './QueueConstruct.js'
import Song from './Song.js'
import { MessageEmbed, Message } from 'discord.js'
import Playlist from './Playlist.js'
import HELPERS from './helpers.js'
import YoutubeSearcher from './YoutubeSearcher.js'

class RythmPlaylist {

    constructor(message, voiceChannel) {
        this.commands = this._fetchAllCommands()
        this.textChannel = message.channel
        this.voiceChannel = voiceChannel
        this.queue = new QueueConstruct(null, null, null)
        this.file = process.env.PLAYLIST_FILE
    }

    execute(message) {
        this.textChannel = message.channel
        this.voiceChannel = message.member.voice.channel
        let args = message.content.split(' ');
        args.map(a => a = a.toLowerCase())
        const givenCommand = args[0].substring(1, args[0].length)
        if (this.commandExists(givenCommand)) {
            const command = this.commands[givenCommand]
            if (!HELPERS.validateCommandLength(args, command.validLength)) {
                this.textChannel.send(":liar: **Tullekopp, det er jo ikke en gyldig kommando** :poop:")
                return
            }
            command.run(message, args)
        } else {
            this.textChannel.send(":liar: **Tullekopp, det er jo ikke en gyldig kommando** :poop:")
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
        let json = JSON.stringify(obj,0, 4);
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
                const newList = new Playlist(name, [], sender.id, [sender.id])
                obj.playlists.push(newList)
                saved = this._writeToFile(obj);
            }
        }
        saved ? this.textChannel.send(":white_check_mark: **Mekka ny liste til deg ladden: ** `" + name + "` - **Administrator:** `" + sender.user.tag + "`")
            : this.textChannel.send(":x: **Kunne ikke mekke ny liste med navn: ** `" + name + "`")
    }

    async validateAddCredentials(args) {
        const playlistname = args[1]
        const url = args[2]
        const obj = await this._readFile()
        return HELPERS.playListExists(playlistname, obj) && HELPERS.matchYoutubeUrl(url)
    }

    async addSongToList(args, user) {
        const keywords = args.slice(2, args.length)
        const playlistname = args[1]
        const obj = await this._readFile()
        const playlists = obj.playlists
        let instance = HELPERS.getPlaylistInstance(playlistname, playlists)
        if (!instance) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
            return
        }
        try {
            const song = await this.search(keywords)
            if (!song) {
                this.textChannel.send(":rotating_light: **Fant ingen sanger** :rotating_light:")
            }
            if (!instance.trustedusers.includes(user.id) || instance.trustedusers.includes("everyone")) {
                this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
                return
            }
            let exists = instance.hasSong(song.url)
            if (!exists) {
                instance.songs.push(song)
                this.textChannel.send(":white_check_mark: **La til: **" + "`" + song.title + "` **i listen** :scroll:")
                this._writeToFile(obj)
                this.enqueue(song)

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
        const obj = await this._readFile()
        return HELPERS.playListExists(playlistname, obj) && user.match(HELPERS.userRegex)[1]
    }

    async trustUser(message, args) {
        const admin = message.member.id
        const playlistname = args[1]
        let trusted = args[2].match(HELPERS.userRegex)
        if (!trusted) {
            return
        }
        trusted = trusted[1]
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
        const added = instance.addTrustedUser(trusted)
        if (added) {
            this.textChannel.send(":white_check_mark: **Du stoler på at: ** <@!" + trusted + "> **ikke fucker opp listen din** :scroll:")
            this._writeToFile(obj)
        }
    }

    async listall() {
        const obj = await this._readFile() 
        let embed = new MessageEmbed()
        embed.setTitle(":scroll: **Antall lister: " + obj.playlists.length + "** :scroll:")
        let text = ""
        let count = 0
        for (let list of obj.playlists) {
            count++
            const amount = list.songs.length
            text += ":printer: **Liste: **" + "`" + list.name + "`" + " | **Antall sanger:** " + "`" + amount + "`" + " | **Administrator:** " + "<@!" + list.creator + "> :scroll: \n"
        }
        if (count === 0) {
            text = ":clown: **Fant ingen lister :rolling_eyes: Du kan lage en ny en ved å bruke: **" + "`!pp create <navn_på_liste>`"
        }
        embed.setDescription(text)
        this.textChannel.send(embed)
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

    async search(args) {
        let song = undefined
        if (args.length === 1 && ytdl.validateURL(args[0])) {
            const obj = await ytdl.getBasicInfo(args[0])
            if (obj) {
                song = new Song(obj.video_url, obj.title, parseInt(obj.length_seconds))
                return song
            }
        }

        const searcher = new YoutubeSearcher()
        const keyword = args.join('')
        song = await searcher.search(keyword)
        if (!song) {
            this.textChannel.send(":x: **Fant ingen videoer** :x:")
            return undefined
        }
        return song
    }

    async play() {
        if (this.queue.size() <= 0) {
            this.queue.playing = false
            this.queue.current = null
            this.textChannel.send(":white_check_mark: :scroll: **Da var denne køen ferdig for denne gang!** :white_check_mark:")
            this.voiceChannel.leave();
            return;
        }

        try {
            this.queue.playing = true
            const song = this.queue.next()

            const estimatedtime = HELPERS.formattedTime(song.length)

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
                ":timer: **Beregnet tid: **" + estimatedtime
            let embed = new MessageEmbed()
            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            this.queue.textChannel.send(embed)
        } catch (e) {
            console.log(e)
            this.queue.textChannel.send(":disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken: **" + "`" + song.url + "` :rotating_light:")
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
        this.queue.clear()
        this.connection.dispatcher.end()
    }
 
    pause(channel) {
        if (!channel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
            return
        }
        if(!this.queue.current) {
            this.textChannel.send(':robot: **Det er ingen sang som spiller** :thinking:')
            return
        }
        this.textChannel.send(":mage: **Sangen er satt på pause** :pencil2:")
        this.connection.dispatcher.pause()
    }

    resume(channel) {
        if (!channel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
            return
        }
        if(!this.queue.current) {
            this.textChannel.send(':robot: **Det er ingen sang å fortsette** :thinking:')
            return
        }
        this.textChannel.send(":mage: **Fortsetter sangen: ** `" + this.queue.current.title + "` :pencil2:")
        this.connection.dispatcher.resume()
    }

    songInfo() {
        if(this.queue && this.queue.current) {
            let song = this.queue.current
            let embed = new MessageEmbed()
            let text =
                ":notes: **Tittel: **" + song.title + "\n" +
                ":beginner: **Youtube link: **" + song.url + "\n" +
                ":arrows_counterclockwise: **Antall sanger fortsatt i køen:** " + this.queue.size() + "\n" +
                ":timer: **Beregnet tid: **" + HELPERS.formattedTime(song.length)
            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            this.textChannel.send(embed)
            return 
        }
        this.textChannel.send(':robot: **Det er ingen sang som spiller ** :thinking:')
    }

    async displayList(listname) {
        const obj = await this._readFile()
        const instance = HELPERS.getPlaylistInstance(listname, obj.playlists)
        if (!instance) {
            this.textChannel.send(":x: **Ingen liste** " + "`" + listname + "`" + " **eksisterer** :x:")
            return
        }
        let text = ""
        let count = 0
        let embed = new MessageEmbed()
        embed.setTitle(":scroll: **Her er sangene i listen: ** `" + instance.name + "` :scroll:")
        for (let song of instance.songs) {
            count++
            text += "**" + count + ") :notes: Title: **" + song.title + "\n"
        }
        text += "\n **Owner: ** \n <@!" + instance.creator + ">"
        text += "\n **Trusted users: ** \n"
        for(let trusted of instance.trustedusers) {
            text += "<@!" + trusted + ">  "
        }
        embed.setDescription(text)
        this.textChannel.send(embed)

    }

    async deleteSong(user, args) {
        const listname = args[0]
        const index = parseInt(args[1])
        const obj = await this._readFile()
        const instance = HELPERS.getPlaylistInstance(listname, obj.playlists)
        if (!instance) {
            this.textChannel.send(":x: **Ingen liste** " + "`" + listname + "`" + " **eksisterer** :x:")
            return
        }
        if (!Number.isInteger(index) || index < 1 || index > instance.songs.length) {
            this.textChannel.send(":x: **Argument nr. 2 må være en gyldig index** :x:")
            return
        }
        if (!instance.trustedusers.includes(user) || instance.trustedusers.includes("everyone")) {
            this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
            return
        }
        instance.songs.splice(index - 1, 1)
        this._writeToFile(obj)
        this.textChannel.send(":mage: **Fjernet sang nr. **" + index + " **fra listen** :scroll:")
    }

    async deleteList(user, args) {
        const listname = args
        const obj = await this._readFile()
        const instance = HELPERS.getPlaylistInstance(listname, obj.playlists)
        if (!instance) {
            this.textChannel.send(":x: **Ingen liste** " + "`" + listname + "`" + " **eksisterer** :x:")
            return
        }
        if (!instance.trustedusers.includes(user) || instance.trustedusers.includes("everyone")) {
            this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
            return
        }
        let count = 0
        for (let list of obj.playlists) {
            if (list.name === listname) {
                obj.playlists.splice(count, 1)
                this._writeToFile(obj)
                this.textChannel.send(":mage: **Fjernet listen: ** `" + listname + "` :scroll:")
                return
            }
            count++
        }
    }

    _fetchAllCommands() {
        return {
            'p': {
                name: "p",
                validLength: -1,
                run: async (message, args) => {
                    try {
                        if (args.length == 1) {
                            this.textChannel.send(":x: **Du må spesifisere hva som skal avspilles mannen!** :x:")
                        }
                        const filtered = await this.search(args.slice(1, args.length))
                        if (!filtered) {
                            return
                        }
                        if (this.queue && this.queue.playing) {
                            this.enqueue(filtered)
                            return
                        }
                        this.connection = await this.voiceChannel.join();
                        this.queue = new QueueConstruct(this.textChannel, this.voiceChannel, this.connection, [filtered])
                        this.play();

                    } catch (e) {
                        console.log(e)
                    }
                },
                validFormats: "`!p <link|search keywords>`",
                commandDescriptions: "Will play the given song link, or search with the given keywords"
            },

            'pl': {
                name: "pl",
                validLength: 2,
                run: async (message, args) => {
                    const playlist = args[1]
                    const obj = await this._readFile()
                    if (HELPERS.playListExists(playlist, obj)) {
                        this.startPlaylist(playlist)
                    } else {
                        this.textChannel.send(":thinking: **Spillelisten finnes ikke** :joy: :joy: ")
                    }
                },
                validFormats: "`!pl <playlist name>`",
                commandDescriptions: "Will play the given list in chronological order"

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

                },
                validFormats: "`!shuffle <playlist name>`",
                commandDescriptions: "Will play the given playlist in shuffle mode"
            },

            's': {
                name: 's',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.skip(channel)
                },
                validFormats: "`!s`",
                commandDescriptions: "Will skip to the next song in the queue"
            },

            'pause': {
                name: 'pause',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.pause(channel)
                },
                validFormats: "`!pause`",
                commandDescriptions: "Pauses the currently playing song"
            },

            'resume': {
                name: 'resume',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.resume(channel)
                },
                validFormats: "`!resume`",
                commandDescriptions: "Resumes the song if it is paused"
            },

            'now': {
                name: 'now',
                validLength: 1,
                run: (message, args) => {
                    this.songInfo()
                },
                validFormats: "`!now`",
                commandDescriptions: "Gives information about the currently playing song"
            },

            'stop': {
                name: 'stop',
                validLength: 1,
                run: (message, args) => {
                    const channel = message.member.voice.channel
                    this.stop(channel)

                },
                validFormats: "`!stop`",
                commandDescriptions: "Will stop the bot and clear the queue"
            },

            'q': {
                name: 'q',
                validLength: 1,
                run: (message, args) => {
                    this.showQueue()
                },
                validFormats: "`!q`",
                commandDescriptions: "Will show the current queue"
            },

            'cum': {
                name: "cum",
                validLength: 1,
                run: (message, args) => {
                    if (!this.alreadyJoined()) {
                        this.textChannel.send(":kissing_heart: **Okei her kommer jeg** :heart_eyes:")
                        this.voiceChannel.join()
                    }
                },
                validFormats: "`!cum`",
                commandDescriptions: "Will make the bot join the voice channel. It will not play anything"
            },

            'leave': {
                name: "leave",
                validLength: 1,
                run: (message, args) => {
                    if (this.alreadyJoined()) {
                        this.textChannel.send(":x: **Aight Imma head out!** :disappointed_relieved: :zipper_mouth:")
                        this.voiceChannel.leave()
                        this.queue.clear()
                        this.voiceChannel = undefined
                        this.textChannel = undefined
                        this.connection = undefined
                    }
                },
                validFormats: "`!leave`",
                commandDescriptions: "Will kick the bot from the voice channel"
            },

            'create': {
                name: "create",
                validLength: 2,
                run: async (message, args) => {
                    const sender = message.member
                    this.createNewList(args[1], sender)
                },
                validFormats: "`!create <name>`",
                commandDescriptions: "Will create a new empty list with the given name"
            },

            'add': {
                name: "add",
                validLength: -1,
                run: (message, args) => {
                    if (this.validateAddCredentials(args)) {
                        const user = message.member
                        this.addSongToList(args, user)
                    } else {
                        this.textChannel.send(":thinking: **Det er ikke måten man legger til en sang i en liste på** :joy: :joy: ")
                    }

                },
                validFormats: "`!add <playlist name> <link:search keywords>`",
                commandDescriptions: "Will add a song to the given list. The song will be either the given link, or a search for the given keywords"
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
                },
                validFormats: "`!trust <playlist name> <@user>`",
                commandDescriptions: "Will give editing permissions for the given list to the given user"
            },

            'listall': {
                name: "listall",
                validLength: 1,
                run: async (message, args) => { await this.listall() },
                validFormats: "`!listall`",
                commandDescriptions: "Will list all the stored lists with their name, number of songs and creator"
            },

            'list': {
                name: 'list',
                validLength: 2,
                run: (message, args) => {
                    this.displayList(args[1])
                },
                validFormats: "`!list <listname>`",
                commandDescriptions: "Will give overview over the songs in the given list"
            },

            'delsong': {
                name: 'delsong',
                validLength: 3,
                run: (message, args) => {
                    this.deleteSong(message.member.id, args.slice(1, args.length))
                },
                validFormats: "`!delsong <listname> <index of song>`",
                commandDescriptions: "Will delete the song at the given index in the list. "
            },

            'dellist': {
                name: 'dellist',
                validLength: 2,
                run: (message, args) => {
                    this.deleteList(message.member.id, args[1])
                },
                validFormats: "`!dellist <listname>`",
                commandDescriptions: "Will delete the given list entirely. "
            },

            'commands': {
                name: 'commands',
                validLength: 1,
                run: (message, args) => {
                    let embed = new MessageEmbed()
                    embed.setTitle("**:scroll: The list of valid commands :scroll:**")
                    let text = ""
                    for (let command of this.getCommandList()) {
                        const c = this.commands[command]
                        text += c.validFormats + "\n **" + c.commandDescriptions + "** \n \n"
                    }
                    embed.setDescription(text)
                    this.textChannel.send(embed)


                },
                validFormats: "`!commands`",
                commandDescriptions: "Will give a list over the commands with descriptions"
            },
        }
    }
}



export default RythmPlaylist
