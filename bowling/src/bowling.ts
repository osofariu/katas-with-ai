export class BowlingGame {
  private rolls: number[] = [];

  public roll(pins: number): void {
    this.rolls.push(pins);
  }

  public score(): number {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += this.strikeScore(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += this.spareScore(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.regularFrameScore(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  private strikeScore(rollIndex: number): number {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  private spareScore(rollIndex: number): number {
    return 10 + this.rolls[rollIndex + 2];
  }

  private regularFrameScore(rollIndex: number): number {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
}
