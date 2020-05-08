

const ytdl = require('ytdl-core');

exports.commands = function () {
    return {
        play: {
            run: async (channel, message, playlistname = "") => {
                const connection = await channel.join();
                if (playlistname == "") {
                    message.channel.send("Her har du litt 'Ole er homo' good stuff!")
                    connection.play(ytdl("https://www.youtube.com/watch?v=CuPTzTtQnCI&t=51s", { filter: 'audioonly' }));
                } else {

                }
            }
        },
        kick: {
            run: (channel, message) => {
                message.channel.send("Imma 'bout to head out!")
                channel.leave()
            }
        }
    }
}