import { BowlingGame } from "./bowling";

describe("BowlingGame", () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  test("should score 0 for a gutter game", () => {
    // Roll 20 times, all gutter balls (0 pins)
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  test("should score correctly for a simple game with no strikes or spares", () => {
    // Roll 20 times, 1 pin each time (total should be 20)
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });

  test("should score correctly for a spare", () => {
    // First frame: spare (5 + 5 = 10, plus next roll bonus)
    game.roll(5);
    game.roll(5); // spare
    game.roll(3); // bonus for the spare

    // Roll remaining 17 times with 0 to complete the game
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }

    // Score should be: 10 (spare) + 3 (bonus) + 3 (regular) = 16
    expect(game.score()).toBe(16);
  });

  test("should score correctly for a strike", () => {
    // First frame: strike (10, plus next two rolls bonus)
    game.roll(10); // strike
    game.roll(3); // bonus roll 1
    game.roll(4); // bonus roll 2

    // Roll remaining 16 times with 0 to complete the game
    for (let i = 0; i < 16; i++) {
      game.roll(0);
    }

    // Score should be: 10 (strike) + 3 + 4 (bonus) + 3 + 4 (regular) = 24
    expect(game.score()).toBe(24);
  });

  test("should score 300 for a perfect game", () => {
    // Roll 12 strikes (10 frames + 2 bonus rolls in 10th frame)
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toBe(300);
  });

  test("should score correctly for a spare in the 10th frame", () => {
    // Roll 18 gutter balls for first 9 frames
    for (let i = 0; i < 18; i++) {
      game.roll(0);
    }

    // 10th frame: spare + bonus roll
    game.roll(5);
    game.roll(5); // spare
    game.roll(3); // bonus roll

    // Score should be: 0 (first 9 frames) + 13 (10th frame) = 13
    expect(game.score()).toBe(13);
  });
});
