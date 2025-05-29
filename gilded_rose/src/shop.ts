import { Item } from "./item";

class Shop {
  public items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  public updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      if (this.items[i].name === "Aged Brie") {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      } else if (
        this.items[i].name === "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality < 50) {
          if (this.items[i].sellIn <= 0) {
            this.items[i].quality = 0;
          } else if (this.items[i].sellIn < 6) {
            this.items[i].quality = Math.min(50, this.items[i].quality + 3);
          } else if (this.items[i].sellIn < 11) {
            this.items[i].quality = Math.min(50, this.items[i].quality + 2);
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      } else if (this.items[i].name === "Conjured item") {
        this.items[i].quality = this.items[i].quality - 2;
      } else {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }

    return this.items;
  }
}

export { Shop };
