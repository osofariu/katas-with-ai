import { Shop } from "./shop";
import { Item } from "./item";

describe("Gilded Rose", function () {
  describe("Rando item", () => {
    it("lowers by 1 sellIn and quality", () => {
      const item = updateShopOneItem("Rando Item", 1, 1);
      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(0);
    });
    it("does not lower quality below 0", () => {
      const item = updateShopOneItem("Rando Item", 1, 0);
      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(0);
    });
  });
  describe("Aged Brie", () => {
    const BRIE = "Aged Brie";
    it("appreciates by 1 quality points", () => {
      const item = updateShopOneItem(BRIE, 10, 49);
      expect(item.quality).toBe(50);
    });
    it("no longer appreciates once it reaches 50 quality points", () => {
      const item = updateShopOneItem(BRIE, 10, 50);
      expect(item.quality).toBe(50);
    });
    it("sellIn date still decreases", () => {
      const item = updateShopOneItem(BRIE, 0, 50);
      expect(item.sellIn).toBe(-1);
    });
  });
  describe("Sulfuras", () => {
    const SULFURAS = "Sulfuras, Hand of Ragnaros";

    it("never decreases in quality, and never has to be sold", () => {
      const item = updateShopOneItem(SULFURAS, 0, 60);
      expect(item.quality).toBe(60);
      expect(item.sellIn).toBe(0);
    });
  });
  describe("Backstage passes", () => {
    const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

    it("increase in quality", () => {
      const item = updateShopOneItem(BACKSTAGE, 11, 30);
      expect(item.quality).toBe(31);
    });
    it("increase in quality by 2 when 10 days or less", () => {
      const item = updateShopOneItem(BACKSTAGE, 10, 30);
      expect(item.quality).toBe(32);
    });
    it("quality does not increase past 50", () => {
      const items = updateShop([
        new Item(BACKSTAGE, 5, 49),
        new Item(BACKSTAGE, 10, 49),
      ]);
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(50);
    });
    it("increase in quality by 3 when 5 days or less", () => {
      const item = updateShopOneItem(BACKSTAGE, 5, 30);
      expect(item.quality).toBe(33);
    });
    it("lowers quality to 0 when sellIn date goes negative", () => {
      const item = updateShopOneItem(BACKSTAGE, 0, 30);
      expect(item.quality).toBe(0);
    });
  });
  describe("Conjured", () => {
    const CONJURED = "Conjured item";
    it("degrates twice as fast as normal items", () => {
      const item = updateShopOneItem(CONJURED, 10, 15);
      expect(item.quality).toBe(13);
    });
  });
});

function updateShop(items: Item[]): Item[] {
  const gildedRose = new Shop(items);
  const res = gildedRose.updateQuality();
  return res;
}

function updateShopOneItem(
  name: string,
  sellIn: number,
  quality: number
): Item {
  const items = updateShop([new Item(name, sellIn, quality)]);
  return items[0];
}
