import ytdl from 'ytdl-core'
import QueueConstruct from './QueueConstruct.js'
import Song from './Song.js'
import Guild from './Guild.js'
import Playlist from './Playlist.js'
import HELPERS from './helpers.js'
import YoutubeSearcher from './YoutubeSearcher.js'
import Championlist from './league/Championlist.js'
import DatabaseHandler from '../database/DatabaseHandler.js'
import Command from './Command.js'
import { MessageEmbed } from 'discord.js'

class RythmPlaylist {

    constructor(message, voiceChannel) {
        this.commands = this._fetchAllCommands()
        this.textChannel = message.channel
        this.voiceChannel = voiceChannel
        this.queue = new QueueConstruct(null, null, null)
        this.file = process.env.PLAYLIST_FILE
        this.guilds = new Map()
    }

    execute(message) {
        const guild = message.guild
        if (!this.guilds.has(guild.id)) {
            this.guilds.set(guild.id, new Guild(guild.id, guild.name))
        }
        console.log(this.guilds)
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
            command.run(guild.id, message.member.id, args)
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

    async createNewList(guildid, playlistname, sender) {
        let saved = false

        const guild = this.guild.get(guildid)
        const exists = guild.getPlaylistByName(playlistname)

        if (exists || playlistname.length >= 45) {
            saved = false
        } else {
            const newList = new Playlist(name, [], sender.id, [sender.id])
            saved = guild.addPlaylist(newList)
        }

        saved ? this.textChannel.send(`:white_check_mark: **Mekka ny liste til deg ladden:** ${playlistname} - **Administrator:** ${sender.user.tag}`)
            : this.textChannel.send(`:x: **Kunne ikke mekke ny liste med navn:** ${playlistname}`)
    }

    async addSongToList(guildid, sender, song, playlistname) {
        if (!song) {
            this.textChannel.send(":rotating_light: **Fant ingen sanger** :rotating_light:")
        }

        const guild = this.guild.get(guildid)
        let playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
            return
        }
        if (!playlist.trusts(sender)) {
            this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
            return
        }

        let exists = playlist.hasSong(song.url)
        if (!exists) {
            playlist.addSong(song)
            this.textChannel.send(`:white_check_mark: **La til:** ${song.title} **i listen** :scroll:`)
        } else {
            this.textChannel.send(":rotating_light: **Sangen finnes allerede i listen!** :rotating_light:")
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

    async trustUser(guildid, playlistname, sender, trusted) {
        if (!trusted) {
            return
        }
        if (sender === trusted) {
            this.textChannel.send(":thinking: **Du stoler brått allerede på deg selv, eller?** :thinking:")
            return
        }

        const guild = this.guilds.get(guildid)
        let playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
            return
        }
        if (playlist.creator !== sender) {
            message.channel.send(":police_car: :cop: **Dette er jo ikke din liste** :scroll: :rotating_light:")
            return
        }

        playlist.addTrustedUser(trusted)
        this.textChannel.send(`:white_check_mark: **Du stoler på at:** <@!${trusted}> **ikke fucker opp listen din** :scroll:`)

    }

    listAll(guildid) {
        const guild = this.guild.get(guildid)
        let text = ""
        let count = 0
        for (let list of guild.playlists.length) {
            count++
            const amount = list.songs.length
            text += `:printer: **Liste:** ${list.name} | **Antall sanger:** ${amount} **Administrator:** <@!${list.creator}> :scroll: \n`
        }
        if (count === 0) {
            text = ":clown: **Fant ingen lister :rolling_eyes: Du kan lage en ny en ved å bruke:** !pp create <navn_på_liste>"
        }
        let embed = new MessageEmbed()
        embed.setTitle(`:scroll: **Antall lister:** ${obj.playlists.length} :scroll:`)
        embed.setDescription(text)
        this.textChannel.send(embed)
    }

    async startPlaylist(guildid, playlistname, shuffle = false) {
        const guild = this.guild.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
        }
        if (playlist.size() <= 0) {
            this.textChannel.send(`:clown: **Spillelisten:** ${playlistname} **har ingen sanger** :clown:`)
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
                .on("error", error => this.textChannel.send(`:disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken:** ${song.url} :rotating_light:`));

            dispatcher.setVolumeLogarithmic(this.queue.volume / 5)
            this.queue.dequeue();

            let text = `:notes: **Tittel:** ${song.title} \n 
                       :beginner: **Youtube link:** ${song.url} \n
                       :arrows_counterclockwise: **Antall sanger fortsatt i køen:** ${this.queue.size()} \n
                       :timer: **Beregnet tid:** ${estimatedtime}`
            let embed = new MessageEmbed()
            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            this.queue.textChannel.send(embed)
        } catch (e) {
            console.log(e)
            this.queue.textChannel.send(`:disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken: ** ${song.url} :rotating_light:`)
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
        if (!this.queue.current) {
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
        if (!this.queue.current) {
            this.textChannel.send(':robot: **Det er ingen sang å fortsette** :thinking:')
            return
        }

        this.textChannel.send(`:mage: **Fortsetter sangen:** ${this.queue.current.title} :pencil2:`)
        this.connection.dispatcher.resume()
    }

    songInfo() {
        if (this.queue && this.queue.current) {
            let song = this.queue.current
            let embed = new MessageEmbed()
            let text = `:notes: **Tittel:** ${song.title} \n 
                        :beginner: **Youtube link:** ${song.url} \n
                        :arrows_counterclockwise: **Antall sanger fortsatt i køen:** ${this.queue.size()} \n
                        :timer: **Beregnet tid:** ${estimatedtime}`

            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            this.textChannel.send(embed)

        } else {
            this.textChannel.send(':robot: **Det er ingen sang som spiller ** :thinking:')
        }
    }

    async displayList(guildid, playlistname) {
        const guild = this.guild.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(`:x: **Ingen liste** ${listname} **eksisterer** :x:`)
            return
        }
        let text = ""
        let count = 0
        for (let song of playlist.songs) {
            count++
            text += `**${count}) :notes: Title:**" ${song.title} \n`
        }
        text += `\n**Owner:** \n<@!${playlist.creator}>`
        text += "\n**Trusted users:** \n"

        for (let trusted of playlist.trustedusers) {
            text += `<@!${trusted}> `
        }

        let embed = new MessageEmbed()
        embed.setTitle(`:scroll: **Her er sangene i listen:** ${playlist.name} :scroll:`)
        embed.setDescription(text)
        this.textChannel.send(embed)

    }

    async deleteSong(guildid, sender, playlistname, songindex) {
        const guild = this.guild.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(`:x: **Ingen liste** ${listname} **eksisterer** :x:`)
            return
        }
        if (!Number.isInteger(songindex) || songindex < 1 || songindex > playlist.size()) {
            this.textChannel.send(":x: **Argument nr. 2 må være en gyldig index** :x:")
            return
        }
        if (!playlist.trusts(sender)) {
            this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
            return
        }
        const song = playlist.removeSong(songindex - 1)
        this.textChannel.send(`:mage: **Fjernet** ${song.title} **fra listen** :scroll:`)
    }

    async deleteList(guildid, sender, playlistname) {
        const guild = this.guild.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(`:x: **Ingen liste** ${playlistname} **eksisterer** :x:`)
            return
        }
        if (!playlist.trusts(sender)) {
            this.textChannel.send(":police_car: :cop: **Du har ikke lov til å endre denne listen** :scroll: :rotating_light:")
            return
        }
        guild.removePlaylist(playlistname)
        this.textChannel.send(`:mage: **Fjernet listen:** ${playlistname} :scroll:`)

    }

    initLeagueGame() {
        let users = []
        let amount = 0
        for (let user of this.voiceChannel.members) {
            if (!user[1].user.bot) {
                amount++
                users.push(user[0])
                if (amount >= 5) {
                    break;
                }
            }
        }
        let championlist = new Championlist()
        users = HELPERS.shuffleArray(users)
        let champs = championlist.getRandomChampionList(users.length)
        let count = 0
        let embed = new MessageEmbed()
        let text = ""
        for (let champ of champs) {
            champ.user = users[count]
            text += `:monkey_face: <@!${champ.user}> **har fått æren av å spille:**
                     :pray: **Champion:** ${champ.name}, ${champ.title}
                     :clinking_glass: **Rolle:** ${champ.lane} \n`
            count++
        }
        embed.setTitle(":video_game: **Nytt league game sa du???** :video_game:")
        embed.setImage('http://www.pngmart.com/files/3/League-of-Legends-Logo-Transparent-Background.png')
        embed.setDescription(text)
        this.textChannel.send(embed)
    }

    testDB() {
        const handler = new DatabaseHandler()
        handler.getAllGuilds()
    }

    _fetchAllCommands() {
        return {
            'p': {
                name: "p",
                validLength: -1,
                run: async (message, args) => {
                    const guildid = message.guild.id
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
                validFormat: "`!p <link|search keywords>`",
                commandDescription: "Will play the given song link, or search with the given keywords"
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

            'trust': new Command('trust', 3, '!trust <listname> <@user>', 'Will give editing permissions for the given list to the given user', async (guildid, sender, args) => {
                console.log(args)
                const playlistname = args[1]
                const taggeduser = args[2].match(HELPERS.userRegex)
                if(!taggeduser) {
                    this.textChannel.send(":thinking: **Det er ikke måten man legger til en trusted bruker i en liste** :joy: :joy:")
                    return
                }
                this.trustUser(guildid, playlistname, sender, taggeduser[1])
            }),

            'listall': new Command('listall', 1, '!listall', 'Will list all the stored lists with their name, number of songs and creator', async (guildid, sender, args) => {
                this.listAll(guildid)
            }),

            'list': new Command('list', 2, '!list <listname>', 'Will give overview over the songs in the given list', async (guildid, sender, args) => {
                const playlistname = args[1]
                this.displayList(guildid, playlistname)
            }),

            'delsong': new Command('delsong', 3, '!delsong <listname> <songindex>', 'Will delete the song at the given index in the list.', async (guildid, sender, args) => {
                const playlistname = args[1]
                const songindex = args[2]
                this.deleteSong(guildid, sender, playlistname, songindex)
            }),

            'dellist': new Command('dellist', 2, '!dellist <listname>', 'Will delete the given list entirely.', async (guildid, sender, args) => {
                const playlistname = args[1]
                this.deleteList(guildid, sender, playlistname)
            }),

            'commands': new Command('commands', 1, '!commands', 'Will give a list over the commands with descriptions', async (guildid, sender, args) => {
                let text = ""
                for (let command of this.getCommandList()) {
                    const c = this.commands[command]
                    text += `\`${c.validFormat}\`\n**${c.description}** \n \n`
                }
                let embed = new MessageEmbed()
                embed.setTitle("**:scroll: The list of valid commands :scroll:**")
                embed.setDescription(text)
                this.textChannel.send(embed)
            }),

            'league': new Command('league', 1, '!league', 'Will randomize champions and lanes for up to 5 if the users in a voice channel', async (guildid, sender, args) => {
                this.initLeagueGame()
            }),

            'db': new Command('db', 1, '!db', 'Random db shit for now', async (guildid, sender, args) => {
                console.log("databasebs")
            })
        }
    }
}



export default RythmPlaylist
