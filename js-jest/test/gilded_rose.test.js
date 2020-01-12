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

  describe('when is Aged Brie', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 10, 20)])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Aged Brie',
          sellIn: 9,
          quality: 21,
        })
      })

      describe('and quality is equal to 50', () => {
        it('decrements only sellIn in 1', () => {
          const gildedRose = new Shop([new Item('Aged Brie', 10, 50)])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: 9,
            quality: 50,
          })
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const gildedRose = new Shop([new Item('Aged Brie', 0, 20)])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: -1,
            quality: 22,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const gildedRose = new Shop([new Item('Aged Brie', 0, 0)])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: -1,
            quality: 2,
          })
        })
      })
    })
  })

  describe('when is Sulfuras, Hand of Ragnaros', () => {
    describe('and sellIn is greater than 0', () => {
      it('dont changes anything', () => {
        const gildedRose = new Shop([
          new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Sulfuras, Hand of Ragnaros',
          sellIn: 0,
          quality: 80,
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('dont changes anything', () => {
          const gildedRose = new Shop([
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('dont changes anything', () => {
          const gildedRose = new Shop([
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
          })
        })
      })
    })
  })
})
