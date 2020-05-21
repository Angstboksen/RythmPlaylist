import items from '../league/items.js'
import Item from '../league/Item.js'
import HELPERS from '../helpers.js'

class Itemlist {

    constructor() {
        this.all = this.parseItems()
        this.created = []
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }

    parseItems() {
        let illegalItems = ["Rod of Ages (Quick Charge)", "Archangel's Staff (Quick Charge)", "Manamune (Quick Charge)"]
        let parsed = []
        let jungleItemsCatched = []
        for (let item of items) {
            if (jungleItemsCatched.includes(item.name) || illegalItems.includes(item.name)) {
                continue
            }
            if (item.name.startsWith("Enchantment")) {
                jungleItemsCatched.push(item.name)
            }
            if (item.purchasable && !item.into && item.depth > 1) {
                parsed.push(new Item(item.name, item.icon))
            }
        }
        return parsed
    }

    getRandomItemList(isJungle = false) {
        let shuffled = HELPERS.shuffleArray([].concat(this.all))
        let itemlist = []
        let jungleItemTaken = false
        while (itemlist.length < 6) {
            let random = this.getRandomInt(shuffled.length)
            let item = shuffled[random]
            if(!isJungle && item.name.startsWith("Enchantment:")) continue
            if(isJungle && !jungleItemTaken && itemlist.length === 5 && !item.name.startsWith("Enchantment:")) continue
            if(item.name.startsWith("Enchantment:")) jungleItemTaken = true
            itemlist.push(item)
            shuffled.splice(random, 1)

        }
        return itemlist
    }
}

export default Itemlist