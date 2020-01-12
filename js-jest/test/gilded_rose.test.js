const { Shop, Item } = require('../src/gilded_rose')

describe('Gilded Rose', () => {
  describe('when is a normal item', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements quality and sellIn in 1', () => {
        const gildedRose = new Shop([
          new Item({
            name: '+5 Dexterity Vest',
            sellIn: 10,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: '+5 Dexterity Vest',
          sellIn: 9,
          quality: 19,
          lendary: false,
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements quality and sellIn in 2', () => {
          const gildedRose = new Shop([
            new Item({
              name: '+5 Dexterity Vest',
              sellIn: 0,
              quality: 20,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: '+5 Dexterity Vest',
            sellIn: -1,
            quality: 18,
            lendary: false,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements only sellIn in 1', () => {
          const gildedRose = new Shop([
            new Item({
              name: '+5 Dexterity Vest',
              sellIn: 0,
              quality: 0,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: '+5 Dexterity Vest',
            sellIn: -1,
            quality: 0,
            lendary: false,
          })
        })
      })
    })

    describe('and is a Conjured item', () => {
      describe('and sellIn is greater than 0', () => {
        it('decrements quality in 2 and sellIn in 1', () => {
          const gildedRose = new Shop([
            new Item({
              name: '+15 Conjured Dexterity Vest',
              sellIn: 10,
              quality: 20,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: '+15 Conjured Dexterity Vest',
            sellIn: 9,
            quality: 18,
            lendary: false,
          })
        })
      })

      describe('and sellIn is equal 0', () => {
        describe('and quality is greater than 0', () => {
          it('decrements quality in 4 and sellIn in 2', () => {
            const gildedRose = new Shop([
              new Item({
                name: '+15 Conjured Dexterity Vest',
                sellIn: 0,
                quality: 20,
              }),
            ])

            const items = gildedRose.updateQuality()

            expect(items[0]).toEqual({
              name: '+15 Conjured Dexterity Vest',
              sellIn: -1,
              quality: 16,
              lendary: false,
            })
          })
        })

        describe('and quality is equal 0', () => {
          it('decrements only sellIn in 1', () => {
            const gildedRose = new Shop([
              new Item({
                name: '+15 Conjured Dexterity Vest',
                sellIn: 0,
                quality: 0,
              }),
            ])

            const items = gildedRose.updateQuality()

            expect(items[0]).toEqual({
              name: '+15 Conjured Dexterity Vest',
              sellIn: -1,
              quality: 0,
              lendary: false,
            })
          })
        })
      })
    })
  })

  describe('when is Aged Brie', () => {
    describe('and sellIn is greater than 0', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Aged Brie',
            sellIn: 10,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Aged Brie',
          sellIn: 9,
          quality: 21,
          lendary: false,
        })
      })

      describe('and quality is equal to 50', () => {
        it('decrements only sellIn in 1', () => {
          const gildedRose = new Shop([
            new Item({
              name: 'Aged Brie',
              sellIn: 10,
              quality: 50,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: 9,
            quality: 50,
            lendary: false,
          })
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const gildedRose = new Shop([
            new Item({
              name: 'Aged Brie',
              sellIn: 0,
              quality: 20,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: -1,
            quality: 22,
            lendary: false,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('decrements sellIn in 1 and increments quality in 2', () => {
          const gildedRose = new Shop([
            new Item({
              name: 'Aged Brie',
              sellIn: 0,
              quality: 0,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Aged Brie',
            sellIn: -1,
            quality: 2,
            lendary: false,
          })
        })
      })
    })
  })

  describe('when is Lendary item (example: Sulfuras, Hand of Ragnaros)', () => {
    describe('and sellIn is greater than 0', () => {
      it('dont changes anything', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
            lendary: true,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Sulfuras, Hand of Ragnaros',
          sellIn: 0,
          quality: 80,
          lendary: true,
        })
      })
    })

    describe('and sellIn is equal 0', () => {
      describe('and quality is greater than 0', () => {
        it('dont changes anything', () => {
          const gildedRose = new Shop([
            new Item({
              name: 'Sulfuras, Hand of Ragnaros',
              sellIn: 0,
              quality: 80,
              lendary: true,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
            lendary: true,
          })
        })
      })

      describe('and quality is equal 0', () => {
        it('dont changes anything', () => {
          const gildedRose = new Shop([
            new Item({
              name: 'Sulfuras, Hand of Ragnaros',
              sellIn: 0,
              quality: 80,
              lendary: true,
            }),
          ])

          const items = gildedRose.updateQuality()

          expect(items[0]).toEqual({
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80,
            lendary: true,
          })
        })
      })
    })
  })

  describe('when is Backstage passes to a TAFKAL80ETC concert', () => {
    describe('and sellIn is greater than 10', () => {
      it('decrements sellIn in 1 and increments quality in 1', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 11,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 10,
          quality: 21,
          lendary: false,
        })
      })
    })

    describe('and sellIn is equal to 10', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 10,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 9,
          quality: 22,
          lendary: false,
        })
      })
    })

    describe('and sellIn is less than 10 and greather than 5', () => {
      it('decrements sellIn in 1 and increments quality in 2', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 9,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 8,
          quality: 22,
          lendary: false,
        })
      })
    })

    describe('and sellIn is equal to 5', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 5,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 4,
          quality: 23,
          lendary: false,
        })
      })
    })

    describe('and sellIn is less than 5 and greather than 0', () => {
      it('decrements sellIn in 1 and increments quality in 3', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 4,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 3,
          quality: 23,
          lendary: false,
        })
      })
    })

    describe('and sellIn is equal to 0', () => {
      it('decrements sellIn in 1 and updates quality to 0', () => {
        const gildedRose = new Shop([
          new Item({
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 0,
            quality: 20,
          }),
        ])

        const items = gildedRose.updateQuality()

        expect(items[0]).toEqual({
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: -1,
          quality: 0,
          lendary: false,
        })
      })
    })
  })
})
