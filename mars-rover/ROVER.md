# The Mars Rover

You're part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Requirements

1. You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.

2. The rover receives a character array of commands:

    - Implement commands that move the rover forward/backward (f,b).
    - Implement commands that turn the rover left/right (l,r).

3. Implement wrapping at edges. But be careful, planets are spheres.

In a 4x4 grid (x ∈ { 1, 2, 3, 4 }, y ∈ { 1, 2, 3, 4 }) the following table shows the resulting position for a movement on the grid:

| Initial Position \ Operation | x + 1 | x - 1 | y + 1 | y - 1 |
| ---------------------------- | ----- | ----- | ----- | ----  |
| (1, 1) | (2, 1) | (4, 1) | (1, 2) | (1, 4)|
| (2, 1) | (3, 1) | (1, 1) | (2, 2) | (2, 4)|
| (2, 2) | (3, 2) | (1, 2) | (2, 3) | (2, 1)|
| (3, 1) | (4, 1) | (2, 1) | (3, 2) | (3, 4)|

4.Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Rules

- Hardcore TDD. No Excuses!
- No red phases while refactoring.
- Be careful about edge cases and exceptions. We can not afford to lose a mars rover, just because the developers overlooked a null pointer.
