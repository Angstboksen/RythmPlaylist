import ytdl from 'ytdl-core'
import QueueConstruct from './QueueConstruct.js'
import Song from './Song.js'
import Guild from './Guild.js'
import Playlist from './Playlist.js'
import HELPERS from './helpers.js'
import YoutubeSearcher from './YoutubeSearcher.js'
import Championlist from './league/Championlist.js'
import * as db from '../database/DatabaseHandler.js'
import Command from './Command.js'
import { MessageEmbed } from 'discord.js'

class RythmPlaylist {

    constructor(guilds = null) {
        this.commands = this._fetchAllCommands()
        this.textChannel = null
        this.voiceChannel = null
        this.file = process.env.PLAYLIST_FILE
        this.guilds = guilds
    }

    async execute(message) {
        if (!this.guilds) {
            this.guilds = await db.initializeGuilds()
        }
        this.textChannel = message.channel
        this.voiceChannel = message.member.voice.channel

        const guild = message.guild
        if (!this.guilds.has(guild.id)) {
            let newg = new Guild(guild.id, guild.name)
            newg.queue = new QueueConstruct(this.textChannel, this.voiceChannel, null)
            this.guilds.set(guild.id, newg)
        }

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

    enqueue(guildid, song) {
        const guild = this.guilds.get(guildid)
        if (guild.queue) {
            guild.queue.enqueue(song)
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
                    this.play(guildid);
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
        guild.connection.dispatcher.end()
        this.textChannel.send(":mage: **Skippetipangen, bort med den sangen!** :no_entry:")
    }

    stop(guildid) {
        const guild = this.guilds.get(guildid)
        if (!this.voiceChannel) {
            this.textChannel.send(':robot: **Du må være i en voice channel bro!** :thinking:')
        }
        this.textChannel.send(":mage: **Fjernet alle sanger fra køen! ** :pencil2:")
        guild.queue.clear()
        guild.connection.dispatcher.end()
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
        this.textChannel.send(":mage: **Sangen er satt på pause** :pencil2:")
        guild.connection.dispatcher.pause()
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

        this.textChannel.send(`:mage: **Fortsetter sangen:** ${guild.queue.current.title} :pencil2:`)
        guild.connection.dispatcher.resume()
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
                     :clinking_glass: **Rolle:** ${champ.lane} \n \n`
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
        embed.setTitle(`:game_die: **Lykke til:\n** ${champ.name}, ${champ.title} :video_game:`)
        embed.setImage(champ.icon)
        this.textChannel.send(embed)
    }

    _fetchAllCommands() {
        return {
            'p': new Command('pl', -1, '!p <link|keywords>', 'Will play the given song link, or search with the given keywords', async (guildid, sender, args) => {
                const guild = this.guilds.get(guildid)
                try {
                    if (args.length === 1) {
                        this.textChannel.send(":x: **Du må spesifisere hva som skal avspilles mannen!** :x:")
                    }
                    const song = await this.search(args.slice(1, args.length))
                    song.title = song.title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                    if (!song) {
                        return
                    }
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

            'champ' : new Command('champ', 1, '!champ', 'Will return a random league champion', (guildid, sender, args) => {
                this.getRandomChampion()
            }),
        }
    }
}



export default RythmPlaylist
