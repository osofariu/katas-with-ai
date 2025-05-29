type Direction = "N" | "S" | "E" | "W";
type Position = { x: number; y: number };
type CommandResult = {
  obstacleEncountered: boolean;
  obstaclePosition?: Position;
};

export class Rover {
  private position: Position;
  private direction: Direction;
  private readonly gridWidth: number;
  private readonly gridHeight: number;
  private obstacles: Position[];

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
    this.obstacles = obstacles;
  }

  getPosition(): Position {
    return this.position;
  }

  getDirection(): Direction {
    return this.direction;
  }

  executeCommands(commands: string[]): CommandResult {
    for (const command of commands) {
      let result: CommandResult;

      switch (command) {
        case "f":
          result = this.moveForward();
          break;
        case "b":
          result = this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          result = { obstacleEncountered: false };
          break;
        case "r":
          this.turnRight();
          result = { obstacleEncountered: false };
          break;
        default:
          result = { obstacleEncountered: false };
          break;
      }

      if (result.obstacleEncountered) {
        return result;
      }
    }

    return { obstacleEncountered: false };
  }

  private moveForward(): CommandResult {
    const newPosition = this.calculateNewPosition(1);
    return this.attemptMove(newPosition);
  }

  private moveBackward(): CommandResult {
    const newPosition = this.calculateNewPosition(-1);
    return this.attemptMove(newPosition);
  }

  private calculateNewPosition(multiplier: number): Position {
    let newX = this.position.x;
    let newY = this.position.y;

    switch (this.direction) {
      case "N":
        newY = this.wrapY(this.position.y + multiplier);
        break;
      case "S":
        newY = this.wrapY(this.position.y - multiplier);
        break;
      case "E":
        newX = this.wrapX(this.position.x + multiplier);
        break;
      case "W":
        newX = this.wrapX(this.position.x - multiplier);
        break;
    }

    return { x: newX, y: newY };
  }

  private attemptMove(newPosition: Position): CommandResult {
    if (this.hasObstacle(newPosition)) {
      return {
        obstacleEncountered: true,
        obstaclePosition: newPosition,
      };
    }

    this.position = newPosition;
    return { obstacleEncountered: false };
  }

  private hasObstacle(position: Position): boolean {
    return this.obstacles.some(
      (obstacle) => obstacle.x === position.x && obstacle.y === position.y
    );
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
