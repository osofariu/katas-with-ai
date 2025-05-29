import { Rover } from "./rover";

describe("Rover", () => {
  it("should initialize with given position and direction", () => {
    const rover = new Rover(1, 1, "N");

    expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    expect(rover.getDirection()).toBe("N");
  });

  it("should initialize with different positions and directions", () => {
    const rover = new Rover(2, 3, "S");

    expect(rover.getPosition()).toEqual({ x: 2, y: 3 });
    expect(rover.getDirection()).toBe("S");
  });

  describe("Commands", () => {
    it("should move forward when facing North", () => {
      const rover = new Rover(1, 1, "N");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 2 });
    });

    it("should move backward when facing North", () => {
      const rover = new Rover(1, 2, "N");

      rover.executeCommands(["b"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    });

    it("should turn left when facing North", () => {
      const rover = new Rover(1, 1, "N");

      rover.executeCommands(["l"]);

      expect(rover.getDirection()).toBe("W");
    });

    it("should turn right when facing North", () => {
      const rover = new Rover(1, 1, "N");

      rover.executeCommands(["r"]);

      expect(rover.getDirection()).toBe("E");
    });
  });

  describe("Edge wrapping", () => {
    it("should wrap from x=4 to x=1 when moving east", () => {
      const rover = new Rover(4, 1, "E");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    });

    it("should wrap from x=1 to x=4 when moving west", () => {
      const rover = new Rover(1, 1, "W");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 4, y: 1 });
    });

    it("should wrap from y=4 to y=1 when moving north", () => {
      const rover = new Rover(1, 4, "N");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    });

    it("should wrap from y=1 to y=4 when moving south", () => {
      const rover = new Rover(1, 1, "S");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 4 });
    });

    it("should wrap backward movement from x=1 to x=4 when facing east", () => {
      const rover = new Rover(1, 1, "E");

      rover.executeCommands(["b"]);

      expect(rover.getPosition()).toEqual({ x: 4, y: 1 });
    });

    it("should wrap backward movement from y=1 to y=4 when facing north", () => {
      const rover = new Rover(1, 1, "N");

      rover.executeCommands(["b"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 4 });
    });
  });

  describe("Configurable grid dimensions", () => {
    it("should wrap in a 3x3 grid", () => {
      const rover = new Rover(3, 3, "N", [], 3, 3);

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 3, y: 1 });
    });

    it("should wrap in a 5x5 grid", () => {
      const rover = new Rover(5, 3, "E", [], 5, 5);

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 3 });
    });

    it("should wrap in a rectangular 6x4 grid", () => {
      const rover = new Rover(6, 2, "E", [], 6, 4);

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 2 });
    });

    it("should wrap vertically in a rectangular 3x5 grid", () => {
      const rover = new Rover(2, 5, "N", [], 3, 5);

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 2, y: 1 });
    });

    it("should use default 4x4 grid when no dimensions specified", () => {
      const rover = new Rover(4, 1, "E");

      rover.executeCommands(["f"]);

      expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    });
  });
});
