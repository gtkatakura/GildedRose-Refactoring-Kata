const { Shop, Item } = require('../src/gilded_rose')

describe('Gilded Rose', () => {
  describe('when is a normal item', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements quality and sellIn in 1', () => {
        const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: '+5 Dexterity Vest',
          sellIn: 9,
          quality: 19,
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements quality and sellIn in 1', () => {
          const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 20)])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: '+5 Dexterity Vest',
            sellIn: -1,
            quality: 18,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements only sellIn in 1', () => {
          const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 0)])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: '+5 Dexterity Vest',
            sellIn: -1,
            quality: 0,
          })
        })
      })
    })
  })
})
