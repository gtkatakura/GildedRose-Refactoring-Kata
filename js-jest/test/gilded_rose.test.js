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
        it('decrements quality and sellIn in 2', () => {
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

  describe('when is Backstage passes to a TAFKAL80ETC concert', () => {
    describe('and sellIn is greater than 10', () => {
      it('decrements sellIn in 1 and increments quality in 1', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 10,
          quality: 21,
        })
      })
    })

    describe('and sellIn is equal to 10', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 9,
          quality: 22,
        })
      })
    })

    describe('and sellIn is less than 10 and greather than 5', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 8,
          quality: 22,
        })
      })
    })

    describe('and sellIn is equal to 5', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 4,
          quality: 23,
        })
      })
    })

    describe('and sellIn is less than 5 and greather than 0', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 3,
          quality: 23,
        })
      })
    })

    describe('and sellIn is equal to 0', () => {
      it('decrements sellIn in 1 and updates quality to 0', () => {
        const gildedRose = new Shop([
          new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: -1,
          quality: 0,
        })
      })
    })
  })
})
