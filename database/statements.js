
export function selectAllGuilds() {
    return "SELECT * FROM guilds"
}

export function selectGuildById(guildid) {
    return `SELECT * FROM guilds WHERE guildid = ${guildid}`
}

export function selectPlaylistByGuildidAndName(guildid, name) {
    return `SELECT * FROM playlists WHERE guildid = ${guildid} AND name = "${name}"`
}

export function selectAllPlaylistsInGuild(guildid) {
    return `SELECT * FROM playlists WHERE guildid = ${guildid}`
}

export function selectAllSongsFromPlaylist(playlistid) {
    return `SELECT * FROM songsinplaylist WHERE playlistid = ${playlistid}`
}

export  function insertIntoGuilds({id, name}) {
    return `INSERT INTO guilds (guildid, name) VALUES (${id}, "${name}")`
}

export  function insertIntoPlaylists({name, creator, guildid}) {
    return `INSERT INTO playlists (name, creator, guildid) VALUES ("${name}", ${creator}, ${guildid})`
}