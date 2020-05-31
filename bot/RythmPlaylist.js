import ytdl from 'ytdl-core'
import QueueConstruct from './QueueConstruct.js'
import Song from './Song.js'
import Guild from './Guild.js'
import Playlist from './Playlist.js'
import YoutubeSearcher from './YoutubeSearcher.js'
import Championlist from './league/Championlist.js'
import * as db from '../database/DatabaseHandler.js'
import Command from './Command.js'
import HELPERS from './helpers.js'
import { MessageEmbed } from 'discord.js'
//import SpotifyApi from './spotify/SpotifyApi.js'

class RythmPlaylist {

    constructor(guilds = db.initializeGuilds()) {
        this.commands = this._fetchAllCommands()
        this.textChannel = null
        this.voiceChannel = null
        this.file = process.env.PLAYLIST_FILE
        this.guilds = guilds
    }

    async execute(message) {

        const guild = message.guild
        let fetched = this.guilds.get(guild.id)
        if (!this.guilds.has(guild.id)) {
            let newg = new Guild(guild.id, guild.name)
            newg.queue.textChannel = await message.channel
            newg.queue.voiceChannel = await message.member.voice.channel
            fetched = newg
            this.guilds.set(guild.id, newg)
        } else {
            if (!fetched.queue.textChannel) {
                fetched.queue.textChannel = await message.channel
            }
            if (!fetched.queue.voiceChannel) {
                fetched.queue.voiceChannel = await message.member.voice.channel
            }
        }

        this.textChannel = await fetched.queue.textChannel
        this.voiceChannel = await fetched.queue.voiceChannel

        let args = message.content.split(' ');
        args.map(a => a = a.toLowerCase())

        const givenCommand = args[0].substring(1, args[0].length)
        if (this.commandExists(givenCommand)) {
            const command = this.commands[givenCommand]
            if (!HELPERS.validateCommandLength(args, command.validLength)) {
                textChannel.send(":liar: **Tullekopp, det er jo ikke en gyldig kommando** :poop:")
                return
            }
            console.log(`Kommando: '${givenCommand}' av ${message.member.user.tag}`)
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

        const guild = this.guilds.get(guildid)
        const exists = guild.getPlaylistByName(playlistname)

        if (exists || playlistname.length >= 45) {
            saved = false
        } else {
            const newList = new Playlist(guildid, playlistname, [], sender, [sender])
            saved = guild.addPlaylist(newList)
        }

        saved ? this.textChannel.send(`:white_check_mark: **Mekka ny liste til deg ladden:** ${playlistname} - **Administrator:** <@!${sender}>`)
            : this.textChannel.send(`:x: **Kunne ikke mekke ny liste med navn:** ${playlistname}`)
    }

    async addSongToList(guildid, sender, song, playlistname) {
        if (!song) {
            this.textChannel.send(":rotating_light: **Fant ingen sanger** :rotating_light:")
            return
        }

        const guild = this.guilds.get(guildid)
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

    enqueue(guildid, song, first = false) {
        const guild = this.guilds.get(guildid)
        if (guild.queue) {
            if (first) {
                guild.queue.enqueue(song, true)
            } else {
                guild.queue.enqueue(song)
            }
            if (guild.queue.playing) {
                this.showQueue(guildid)
            }
        }
    }

    async showQueue(guildid) {
        const guild = this.guilds.get(guildid)
        if (guild.queue) {
            this.textChannel.send(await guild.queue.show())
        }
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
        const guild = this.guilds.get(guildid)
        let text = ""
        let count = 0
        for (let list of guild.playlists) {
            count++
            const amount = list.songs.length
            text += `:printer: **Liste:** ${list.name} | **Antall sanger:** ${amount} **Administrator:** <@!${list.creator}> :scroll: \n`
        }
        if (count === 0) {
            text = ":clown: **Fant ingen lister :rolling_eyes: Du kan lage en ny en ved å bruke:** !pp create <navn_på_liste>"
        }
        let embed = new MessageEmbed()
        embed.setTitle(`:scroll: **Antall lister:** ${guild.playlists.length} :scroll:`)
        embed.setDescription(text)
        this.textChannel.send(embed)
    }

    async startPlaylist(guildid, playlistname, shuffle = false) {
        const guild = this.guilds.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(":rotating_light: :scroll: **Listen finnes ikke** :scroll: :rotating_light:")
        }
        if (playlist.size() <= 0) {
            this.textChannel.send(`:clown: **Spillelisten:** ${playlistname} **har ingen sanger** :clown:`)
            return
        }
        guild.connection = await this.voiceChannel.join()
        let songs = playlist.getSongs(shuffle)
        guild.queue = new QueueConstruct(this.textChannel, this.voiceChannel, guild.connection, songs)
        this.play(guildid)
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
            return null
        }
        return song
    }

    async play(guildid) {
        const guild = this.guilds.get(guildid)
        if (guild.queue.size() <= 0) {
            guild.queue.playing = false
            guild.queue.current = null
            this.textChannel.send(":white_check_mark: :scroll: **Da var denne køen ferdig for denne gang!** :white_check_mark:")
            this.voiceChannel.leave();
            return;
        }

        try {
            guild.queue.playing = true
            const song = guild.queue.next()
            const estimatedtime = HELPERS.formattedTime(song.length)
            const dispatcher = guild.queue.connection
                .play(ytdl(song.url), { filter: 'audioonly' })
                .on("finish", () => {
                    try {
                        this.play(guildid);
                    } catch (e) {
                        this.textChannel.send(`:disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken:** ${song.url} :rotating_light:`)
                    }
                })
                .on("error", error => this.textChannel.send(`:disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken:** ${song.url} :rotating_light:`));

            dispatcher.setVolumeLogarithmic(guild.queue.volume / 5)
            guild.queue.dequeue();

            let text = `:notes: **Tittel:** ${song.title} 
                       :beginner: **Youtube link:** ${song.url}
                       :arrows_counterclockwise: **Antall sanger fortsatt i køen:** ${guild.queue.size()}
                       :timer: **Beregnet tid:** ${estimatedtime}`
            let embed = new MessageEmbed()
            embed.setColor("RANDOM")
            embed.setTitle(":arrow_forward: **Hva spilles nå? ** :arrow_forward:")
            embed.setDescription(text)
            guild.queue.textChannel.send(embed)
        } catch (e) {
            console.log(e)
            guild.queue.textChannel.send(`:disappointed_relieved: **Det skjedde en feil med avspillingen av denne linken: ** ${song.url} :rotating_light:`)
        }
    }

    skip(guildid) {
        const guild = this.guilds.get(guildid)
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
        }
        if (guild.connection) {
            guild.connection.dispatcher.end()
            this.textChannel.send(":mage: **Skippetipangen, bort med den sangen!** :no_entry:")
        }
    }

    skipTo(guildid, index) {
        index = parseInt(index)
        const guild = this.guilds.get(guildid)
        let queue = guild.queue
        if (!this.voiceChannel || !queue) {
            return
        }
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
            return
        }
        if (!Number.isInteger(index)) {
            this.textChannel.send(':robot: **Argument nr.2 må være et tall** :thinking:')
            return
        }

        if (!queue.inrange(index)) {
            this.textChannel.send(':robot: **Ikke en gyldig index** :thinking:')
            return
        }

        if (guild.connection) {
            guild.queue.shift(index)
            guild.connection.dispatcher.end()
            this.textChannel.send(":mage: **Skipper som fææææn!** :no_entry:")
        }
    }

    stop(guildid) {
        const guild = this.guilds.get(guildid)
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
        }
        if (guild.connection) {
            guild.queue.clear()
            guild.connection.dispatcher.end()
            this.textChannel.send(":mage: **Fjernet alle sanger fra køen! ** :pencil2:")
        }
    }

    pause(guildid) {
        const guild = this.guilds.get(guildid)
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
            return
        }
        if (!guild.queue.current) {
            this.textChannel.send(':robot: **Det er ingen sang som spiller** :thinking:')
            return
        }
        if (guild.connection) {
            guild.connection.dispatcher.pause()
            this.textChannel.send(":mage: **Sangen er satt på pause** :pencil2:")
        }
    }

    resume(guildid) {
        const guild = this.guilds.get(guildid)
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
            return
        }
        if (!guild.queue.current) {
            this.textChannel.send(':robot: **Det er ingen sang å fortsette** :thinking:')
            return
        }

        if (guild.connection) {
            guild.connection.dispatcher.resume()
            this.textChannel.send(`:mage: **Fortsetter sangen:** ${guild.queue.current.title} :pencil2:`)
        }
    }

    songInfo(guildid) {
        const guild = this.guilds.get(guildid)
        if (guild.queue && guild.queue.current) {
            let song = guild.queue.current
            const estimatedtime = HELPERS.formattedTime(song.length)
            let embed = new MessageEmbed()
            let text = `:notes: **Tittel:** ${song.title}
                        :beginner: **Youtube link:** ${song.url}
                        :arrows_counterclockwise: **Antall sanger fortsatt i køen:** ${guild.queue.size()}
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
        const guild = this.guilds.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(`:x: **Ingen liste** ${playlistname} **eksisterer** :x:`)
            return
        }
        let text = "**Songs** \n"
        let count = 0
        for (let song of playlist.songs) {
            if (text.length > 1500) {
                break;
            }
            count++
            text += `**${count}) :notes: Title:**" ${song.title} \n`
        }
        if (count === 0) {
            text += "List contains no songs"
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
        const guild = this.guilds.get(guildid)
        const playlist = guild.getPlaylistByName(playlistname)
        if (!playlist) {
            this.textChannel.send(`:x: **Ingen liste** ${playlistname} **eksisterer** :x:`)
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
        const guild = this.guilds.get(guildid)
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
                     :clinking_glass: **Rolle:** ${champ.lane}
                     :hammer: https://www.loltrollbuild.com/champions/${champ.key} \n \n`
            count++
        }
        embed.setTitle(":video_game: **Nytt league game sa du???** :video_game:")
        embed.setImage('http://www.pngmart.com/files/3/League-of-Legends-Logo-Transparent-Background.png')
        embed.setDescription(text)
        this.textChannel.send(embed)
    }

    getRandomChampion() {
        const cl = new Championlist()
        const champ = cl.getRandomChampion()
        let embed = new MessageEmbed()
        let text = `:pray: **Champion:** ${champ.name}, ${champ.title}
                    :hammer: **Build:** https://www.loltrollbuild.com/champions/${champ.key}`
        embed.setTitle(`:game_die: **Lykke til** :video_game:`)
        embed.setImage(champ.icon)
        embed.setDescription(text)
        this.textChannel.send(embed)
    }

    /*sync(guildid) {
        let s = new SpotifyApi()
        const guild = this.guilds.get(guildid)
        let playlist = guild.getPlaylistByName("schindler")
        s.syncPlaylistToJuanita("46t7u5go24tjd4mdhfobe2ns6", "Schindler's Fist", playlist)
    }*/

    _fetchAllCommands() {
        return {
            'p': new Command('pl', -1, '!p <link|keywords>', 'Will play the given song link, or search with the given keywords', async (guildid, sender, args) => {
                const guild = this.guilds.get(guildid)
                try {
                    if (args.length === 1) {
                        this.textChannel.send(":x: **Du må spesifisere hva som skal avspilles mannen!** :x:")
                        return
                    }
                    const song = await this.search(args.slice(1, args.length))
                    if (!song) {
                        this.textChannel.send(`:x: **Ingen sang funnet** :x:`)
                        return
                    }
                    song.title = song.title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                    if (guild.queue && guild.queue.playing) {
                        this.enqueue(guildid, song)
                        this.textChannel.send(`:white_check_mark: **La til** ${song.title} **i køen** :white_check_mark:`)
                        return
                    }
                    guild.connection = await this.voiceChannel.join();
                    guild.queue = new QueueConstruct(this.textChannel, this.voiceChannel, guild.connection, [song])
                    this.play(guildid);

                } catch (e) {
                    console.log(e)
                }
            }),

            'first': new Command('first', -1, '!first <link|keywords>', 'Will place the given song fist in the current queue', async (guildid, sender, args) => {
                const guild = this.guilds.get(guildid)
                try {
                    const song = await this.search(args.slice(1, args.length))
                    if (!song) {
                        this.textChannel.send(`:x: **Ingen sang funnet** :x:`)
                        return
                    }
                    song.title = song.title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                    if (guild.queue && guild.queue.playing) {
                        this.enqueue(guildid, song, true)
                        this.textChannel.send(`:white_check_mark: **La til** ${song.title} **først i køen** :white_check_mark:`)
                        return
                    }
                    guild.connection = await this.voiceChannel.join();
                    guild.queue = new QueueConstruct(this.textChannel, this.voiceChannel, guild.connection, [song])
                    this.play(guildid);

                } catch (e) {
                    console.log(e)
                }
            }),

            'pl': new Command('pl', 2, '!pl <listname>', 'Will play the given list in chronological order', (guildid, sender, args) => {
                const playlistname = args[1]
                this.startPlaylist(guildid, playlistname)
            }),

            'shuffle': new Command('shuffle', 2, '!shuffle <listname>', 'Will play the given playlist in shuffle mode', (guildid, sender, args) => {
                const playlistname = args[1]
                this.startPlaylist(guildid, playlistname, true)
            }),

            's': new Command('s', 1, '!s', 'Will skip to the next song in the queue', (guildid, sender, args) => {
                this.skip(guildid)
            }),

            'skip': new Command('skip', 2, '!skip <index>', 'Will skip to the song at the index given in the queue', (guildid, sender, args) => {
                const index = args[1]
                this.skipTo(guildid, index)
            }),

            'pause': new Command('pause', 1, '!pause', 'Will pause the current song', (guildid, sender, args) => {
                this.pause(guildid)
            }),

            'resume': new Command('resume', 1, '!resume', 'Resumes the song if it is paused', (guildid, sender, args) => {
                this.resume(guildid)
            }),

            'now': new Command('now', 1, '!now', 'Gives information about the currently playing song', (guildid, sender, args) => {
                this.songInfo(guildid)
            }),

            'stop': new Command('stop', 1, '!stop', 'Will stop the bot and clear the queue', (guildid, sender, args) => {
                if (!this.alreadyJoined()) {
                    this.stop(guildid)
                }
            }),

            'q': new Command('q', 1, '!q', 'Will show the current queue', (guildid, sender, args) => {
                this.showQueue(guildid)

            }),

            'cum': new Command('cum', 1, '!cum', 'Will make the bot join the voice channel. It will not play anything', (guildid, sender, args) => {
                if (!this.alreadyJoined()) {
                    this.textChannel.send(":kissing_heart: **Okei her kommer jeg** :heart_eyes:")
                    this.voiceChannel.join()
                }
            }),

            'leave': new Command('leave', 1, '!leave', 'Will kick the bot from the voice channel', (guildid, sender, args) => {
                const guild = this.guilds.get(guildid)
                if (this.alreadyJoined()) {
                    this.textChannel.send(":x: **Aight Imma head out!** :disappointed_relieved: :zipper_mouth:")
                    this.voiceChannel.leave()
                    guild.queue.clear()
                    this.voiceChannel = undefined
                    this.textChannel = undefined
                    guild.connection = undefined
                }
            }),

            'create': new Command('create', 2, '!create <listname>', 'Will create a new empty list with the given name', (guildid, sender, args) => {
                const playlistname = args[1]
                this.createNewList(guildid, playlistname, sender)
            }),

            'add': new Command('add', -1, '!add <listname> <link|keywords>', 'Will add a song to the given list. The song will be either the given link, or a search for the given keywords', async (guildid, sender, args) => {
                const playlistname = args[1]
                const keywords = args.slice(2, args.length)
                const song = await this.search(keywords)
                song.title = song.title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                this.addSongToList(guildid, sender, song, playlistname)
            }),

            'trust': new Command('trust', 3, '!trust <listname> <@user>', 'Will give editing permissions for the given list to the given user', (guildid, sender, args) => {
                const playlistname = args[1]
                const taggeduser = args[2].match(HELPERS.userRegex)
                if (!taggeduser) {
                    this.textChannel.send(":thinking: **Det er ikke måten man legger til en trusted bruker i en liste** :joy: :joy:")
                    return
                }
                this.trustUser(guildid, playlistname, sender, taggeduser[1])
            }),

            'listall': new Command('listall', 1, '!listall', 'Will list all the stored lists with their name, number of songs and creator', (guildid, sender, args) => {
                this.listAll(guildid)
            }),

            'list': new Command('list', 2, '!list <listname>', 'Will give overview over the songs in the given list', (guildid, sender, args) => {
                const playlistname = args[1]
                this.displayList(guildid, playlistname)
            }),

            'delsong': new Command('delsong', 3, '!delsong <listname> <songindex>', 'Will delete the song at the given index in the list.', (guildid, sender, args) => {
                const playlistname = args[1]
                const songindex = parseInt(args[2])
                this.deleteSong(guildid, sender, playlistname, songindex)
            }),

            'dellist': new Command('dellist', 2, '!dellist <listname>', 'Will delete the given list entirely.', (guildid, sender, args) => {
                const playlistname = args[1]
                this.deleteList(guildid, sender, playlistname)
            }),

            'commands': new Command('commands', 1, '!commands', 'Will give a list over the commands with descriptions', (guildid, sender, args) => {
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

            'league': new Command('league', 1, '!league', 'Will randomize champions and lanes for up to 5 if the users in a voice channel', (guildid, sender, args) => {
                this.initLeagueGame()
            }),

            'champ': new Command('champ', 1, '!champ', 'Will return a random league champion', (guildid, sender, args) => {
                this.getRandomChampion()
            }),

            /*'sync': new Command('sp', 1, '!sp', 'Will return a random league champion', (guildid, sender, args) => {
                this.sync(guildid)
            }),*/
        }
    }
}



export default RythmPlaylist
