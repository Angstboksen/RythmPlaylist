import yts from 'yt-search'
import Song from './Song.js'


class YoutubeSearcher {

    async search(keywords) {
        const obj = await yts(keywords)
        if(obj.videos.length <= 0) {
            return undefined
        }
        const first = obj.videos[0]
        return new Song(first.url, first.title, first.seconds, first.thumbnail)
    }
}

export default YoutubeSearcher
