import suchtube from 'suchtube'


class YoutubeSearcher {

    async search(keywords) {
        let url = await suchtube.search(keywords).then(video => {
            if (video) {
                return video.link
            }
            return undefined
        })
        return url
    }
}

export default YoutubeSearcher
