import mysql from 'mysql'
import * as statements from './statements.js'

class DatabaseHandler {

    createConnection() {
        return mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
    }

    async connectAndQuery(query) {
        const con = this.createConnection()
        return new Promise((resolve, reject) => {
            con.connect(function (err) {
                if (err) reject(err)
                con.query(query, function (err, result, fields) {
                    if (err) reject(err);
                    resolve(result)
                });
            });
        })
    }

    async getAllGuilds() {
        const result = await this.connectAndQuery(statements.selectAllGuilds())
        return result
    }

    async addNewPlaylistToGuild(playlist) {
        const result = await this.connectAndQuery(statements.insertIntoPlaylists(playlist))
        console.log(result)
    }
}

export default DatabaseHandler