import champions from './champions.js'
import Champion from './Champion.js'
import HELPERS from '../helpers.js'

class Championlist {

    constructor() {
        this.all = this.parseChamps()
        this.lanes = HELPERS.shuffleArray(["Toplane", "Jungle", "Midlane", "Botlane", "Support"])
        this.created = null
    }

    parseChamps() {
        let champs = []
        for (let champ of champions) {
            champs.push(new Champion(champ.name, champ.key, champ.title, champ.tags, champ.icon))
        }
        return champs
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }

    getRandomChampionList(count) {
        let list = []
        let taken = []
        let i = 0
        while(i < count){
            let random = this.getRandomInt(this.all.length)
            if(taken.includes(random)) continue
            list.push(this.all[random])
            taken.push(random)
            list[i].lane = this.lanes[i]
            i++
        }
        return list
    }
}

export default Championlist;