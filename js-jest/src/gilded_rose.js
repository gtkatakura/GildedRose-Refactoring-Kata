class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === 'Sulfuras, Hand of Ragnaros') continue

      let qualityFactor = item.sellIn > 0 ? 1 : 2

      if (
        item.name === 'Aged Brie' ||
        item.name === 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn <= 0) {
            qualityFactor = -item.quality
          } else if (item.sellIn <= 5) {
            qualityFactor = 3
          } else if (item.sellIn <= 10) {
            qualityFactor = 2
          } else {
            qualityFactor = 1
          }
        }

        if (item.quality < 50) {
          item.quality += qualityFactor
        }
      } else if (item.quality > 0) {
        if (item.name.includes('Conjured')) {
          qualityFactor *= 2
        }

        item.quality -= qualityFactor
      }

      item.sellIn -= 1
    }

    return this.items
  }
}

module.exports = {
  Item,
  Shop,
}
