class Item {
  constructor({
    name,
    sellIn,
    quality,
    lendary = false,
    factores = {
      quality: {
        type: 'decrement',
      },
    },
  }) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
    this.lendary = lendary
    this.factores = factores
  }

  updateQuality() {
    if (this.lendary) return

    let qualityFactor = this.sellIn > 0 ? 1 : 2

    if (this.factores.quality.type === 'increment') {
      if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.sellIn <= 0) {
          qualityFactor = -this.quality
        } else if (this.sellIn <= 5) {
          qualityFactor = 3
        } else if (this.sellIn <= 10) {
          qualityFactor = 2
        } else {
          qualityFactor = 1
        }
      }

      if (this.quality < 50) {
        this.quality += qualityFactor
      }
    } else if (this.quality > 0) {
      if (this.name.includes('Conjured')) {
        qualityFactor *= 2
      }

      this.quality -= qualityFactor
    }

    this.sellIn -= 1
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality()
    }

    return this.items
  }
}

module.exports = {
  Item,
  Shop,
}
