import yts from 'yt-search'
import Song from './Song.js'


class YoutubeSearcher {

    async search(keywords, number = 0) {
        console.log(keywords + "  " + number)
        if (keywords === "" || number == 3) {
            return undefined
        }
        try {
            const obj = await yts(keywords)
            if (obj.videos.length > 0) {
                const first = obj.videos[0]
                return new Song(first.url, first.title, first.seconds, first.thumbnail)
            }
            return this.search(keywords, number + 1)

        } catch (e) {
            return undefined
        }
    }
}

export default YoutubeSearcher
