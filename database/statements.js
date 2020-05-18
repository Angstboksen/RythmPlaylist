
export function selectAllGuilds() {
    return "SELECT * FROM guilds"
}

export function selectGuildById(guildid) {
    return `SELECT * FROM guilds WHERE guildid = ${guildid}`
}

export function selectAllPlaylistsInGuild(guildid) {
    return `SELECT * FROM playlists WHERE guildid = ${guildid}`
}

export function selectSongByURL(url) {
    return `SELECT * FROM songs WHERE url = "${url}"`
}

export function selectPlaylistByNameAndGuildId(name, guildid) {
    return `SELECT * FROM playlists WHERE name = "${name}" AND guildid = ${guildid}`
}

export function selectSongInPlaylist(url, playlistid) {
    return `SELECT * FROM songinplaylist WHERE songurl = "${url}" AND playlistid = ${playlistid}`
}

export function selectSongUrlInPlaylists(playlistid) {
    return `SELECT * FROM songinplaylist WHERE playlistid = ${playlistid}`
}

export function selectTrustedusersByPlaylistId(playlistid) {
    return `SELECT * FROM trustedusers WHERE playlistid = ${playlistid}`
}

export function selectAllSongsFromPlaylist(playlistid) {
    return `SELECT * FROM songsinplaylist WHERE playlistid = ${playlistid}`
}

export  function insertIntoGuilds(id, name) {
    return `INSERT INTO guilds (guildid, name) VALUES (${id}, "${name}")`
}

export  function insertIntoPlaylists({name, creator, guildid}) {
    return `INSERT INTO playlists (name, creator, guildid) VALUES ("${name}", "${creator}", ${guildid})`
}

export function insertIntoSongs({url, title, length, thumbnail}) {
    return `INSERT INTO songs (url, title, length, thumbnail) VALUES ("${url}", "${title}", ${length}, "${thumbnail}")`
}

export function insertIntoSongInPLaylist(songurl, playlistid) {
    return `INSERT INTO songinplaylist (songurl, playlistid) VALUES ("${songurl}", ${playlistid})`
}

export function insertIntoTrustedusers(playlistid, userid) {
    return `INSERT INTO trustedusers (playlistid, userid) VALUES (${playlistid}, "${userid}")`
}

export function deleteSongInList(playlistid, songurl) {
    return `DELETE FROM songinplaylist WHERE songurl = "${songurl}" AND playlistid = ${playlistid}`
}

export function deletePlaylistFromGuild(guildid, playlistname) {
    return `DELETE FROM playlists WHERE guildid = ${guildid} AND name = "${playlistname}"`
}

