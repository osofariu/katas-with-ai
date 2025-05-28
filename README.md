# TDD with Agents

## Gilded Rose

- Mostly used AI to write tests according to the description for pricing items, one at the time
- took a more active role in refactoring the code

## Bowling

Really happy with the experience with claude-4-sonnet:

The only thing I had to type was the initial prompt:

 > I need to implement the bowling kata -- scoring a bowling game.  The instructions are in the readme. We want to use TDD to slowly develop our solution one step at the time usign the red-green-refactor plan. Let's start with a simple test to start driving the solution.

After that, it would implement a test, and wait for me to accept it, prompt me to run it.  Cursor now lets to _auto-run_ commands so you don't have to accept the command.  Mighe be dangerous to turn that on permanently since it can run **any** commands on my machine.

At the end it wrote a corner-case test for the end of the game, which was cool, and it refactored some expressions into function.  It all made sense.

I think this problem is very well understood to models.  I will have to try something it hasn't seen before to see how it does.