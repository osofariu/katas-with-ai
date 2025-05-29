type Direction = "N" | "S" | "E" | "W";
type Position = { x: number; y: number };

export class Rover {
  private position: Position;
  private direction: Direction;
  private readonly gridWidth: number;
  private readonly gridHeight: number;

  constructor(
    x: number,
    y: number,
    direction: Direction,
    obstacles: Position[] = [],
    width: number = 4,
    height: number = 4
  ) {
    this.position = { x, y };
    this.direction = direction;
    this.gridWidth = width;
    this.gridHeight = height;
  }

  getPosition(): Position {
    return this.position;
  }

  getDirection(): Direction {
    return this.direction;
  }

  executeCommands(commands: string[]): void {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
      }
    }
  }

  private moveForward(): void {
    switch (this.direction) {
      case "N":
        this.position.y = this.wrapY(this.position.y + 1);
        break;
      case "S":
        this.position.y = this.wrapY(this.position.y - 1);
        break;
      case "E":
        this.position.x = this.wrapX(this.position.x + 1);
        break;
      case "W":
        this.position.x = this.wrapX(this.position.x - 1);
        break;
    }
  }

  private moveBackward(): void {
    switch (this.direction) {
      case "N":
        this.position.y = this.wrapY(this.position.y - 1);
        break;
      case "S":
        this.position.y = this.wrapY(this.position.y + 1);
        break;
      case "E":
        this.position.x = this.wrapX(this.position.x - 1);
        break;
      case "W":
        this.position.x = this.wrapX(this.position.x + 1);
        break;
    }
  }

  private wrapX(x: number): number {
    if (x > this.gridWidth) {
      return 1;
    }
    if (x < 1) {
      return this.gridWidth;
    }
    return x;
  }

  private wrapY(y: number): number {
    if (y > this.gridHeight) {
      return 1;
    }
    if (y < 1) {
      return this.gridHeight;
    }
    return y;
  }

  private turnLeft(): void {
    const leftTurns: Record<Direction, Direction> = {
      N: "W",
      W: "S",
      S: "E",
      E: "N",
    };
    this.direction = leftTurns[this.direction];
  }

  private turnRight(): void {
    const rightTurns: Record<Direction, Direction> = {
      N: "E",
      E: "S",
      S: "W",
      W: "N",
    };
    this.direction = rightTurns[this.direction];
  }
}
