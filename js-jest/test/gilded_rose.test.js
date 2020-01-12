const { Shop, Item } = require('../src/gilded_rose')

describe('Gilded Rose', () => {
  describe('when is a normal item', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements quality and sellIn in 1', () => {
        const item = new Item({
          name: '+5 Dexterity Vest',
          sellIn: 10,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(9)
        expect(item.quality).toBe(19)
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements quality and sellIn in 2', () => {
          const item = new Item({
            name: '+5 Dexterity Vest',
            sellIn: 0,
            quality: 20,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(-1)
          expect(item.quality).toBe(18)
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements only sellIn in 1', () => {
          const item = new Item({
            name: '+5 Dexterity Vest',
            sellIn: 0,
            quality: 0,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(-1)
          expect(item.quality).toBe(0)
        })
      })
    })

    describe('and is a Conjured item', () => {
      describe('and sellIn is greater than 0', () => {
        it('decrements quality in 2 and sellIn in 1', () => {
          const item = new Item({
            name: '+15 Conjured Dexterity Vest',
            sellIn: 10,
            quality: 20,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(9)
          expect(item.quality).toBe(18)
        })
      })

      describe('and sellIn is equal 0', () => {
        describe('and quality is greater than 0', () => {
          it('decrements quality in 4 and sellIn in 2', () => {
            const item = new Item({
              name: '+15 Conjured Dexterity Vest',
              sellIn: 0,
              quality: 20,
            })

            item.updateQuality()

            expect(item.sellIn).toBe(-1)
            expect(item.quality).toBe(16)
          })
        })

        describe('and quality is equal 0', () => {
          it('decrements only sellIn in 1', () => {
            const item = new Item({
              name: '+15 Conjured Dexterity Vest',
              sellIn: 0,
              quality: 0,
            })

            item.updateQuality()

            expect(item.sellIn).toBe(-1)
            expect(item.quality).toBe(0)
          })
        })
      })
    })
  })

  describe('when is Aged Brie', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const item = new Item({
          name: 'Aged Brie',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 10,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(9)
        expect(item.quality).toBe(21)
      })

      describe('and quality is equal to 50', () => {
        it('decrements only sellIn in 1', () => {
          const item = new Item({
            name: 'Aged Brie',
            factores: {
              quality: { type: 'increment' },
            },
            sellIn: 10,
            quality: 50,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(9)
          expect(item.quality).toBe(50)
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const item = new Item({
            name: 'Aged Brie',
            factores: {
              quality: { type: 'increment' },
            },
            sellIn: 0,
            quality: 20,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(-1)
          expect(item.quality).toBe(22)
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const item = new Item({
            name: 'Aged Brie',
            factores: {
              quality: { type: 'increment' },
            },
            sellIn: 0,
            quality: 0,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(-1)
          expect(item.quality).toBe(2)
        })
      })
    })
  })

  describe('when is Lendary item (example: Sulfuras, Hand of Ragnaros)', () => {
    describe('and sellIn is greater than 0', () => {
      it('dont changes anything', () => {
        const item = new Item({
          name: 'Sulfuras, Hand of Ragnaros',
          sellIn: 0,
          quality: 80,
          lendary: true,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(0)
        expect(item.quality).toBe(80)
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('dont changes anything', () => {
          const item = new Item({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
            lendary: true,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(0)
          expect(item.quality).toBe(80)
        })
      })

      describe('and quality is equal 0', () => {
        it('dont changes anything', () => {
          const item = new Item({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
            lendary: true,
          })

          item.updateQuality()

          expect(item.sellIn).toBe(0)
          expect(item.quality).toBe(80)
        })
      })
    })
  })

  describe('when is Backstage passes to a TAFKAL80ETC concert', () => {
    describe('and sellIn is greater than 10', () => {
      it('decrements sellIn in 1 and increments quality in 1', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 11,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(10)
        expect(item.quality).toBe(21)
      })
    })

    describe('and sellIn is equal to 10', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 10,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(9)
        expect(item.quality).toBe(22)
      })
    })

    describe('and sellIn is less than 10 and greather than 5', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 9,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(8)
        expect(item.quality).toBe(22)
      })
    })

    describe('and sellIn is equal to 5', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 5,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(4)
        expect(item.quality).toBe(23)
      })
    })

    describe('and sellIn is less than 5 and greather than 0', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 4,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(3)
        expect(item.quality).toBe(23)
      })
    })

    describe('and sellIn is equal to 0', () => {
      it('decrements sellIn in 1 and updates quality to 0', () => {
        const item = new Item({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          factores: {
            quality: { type: 'increment' },
          },
          sellIn: 0,
          quality: 20,
        })

        item.updateQuality()

        expect(item.sellIn).toBe(-1)
        expect(item.quality).toBe(0)
      })
    })
  })
})
