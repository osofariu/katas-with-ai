# TDD with Agents

## Pencil

I used Claude 3.7 Sonnet, and had it use TDD loosely, doing a TDD loop one feature at the time.  For example for /Point Degragation/ I would ask it
to write all the tests, then implement the solution to makem them pass.

Overall the experience was impressive, but 3.7 would not always wait for me to accept the tests -- it would implement them and stop after it fully implemented them. Not great.

It did not think to refactor, but when prompted, and with limited direction it was able to do it successfully.

## Gilded Rose

- Mostly used AI to write tests according to the description for pricing items, one at the time
- I took a more active role in refactoring the code
- It's been some time since I did this one and I can't remember any more.. should have taken notes.

## Bowling

Really happy with the experience with claude-4-sonnet:

The only thing I had to type was the initial prompt:

 > I need to implement the bowling kata -- scoring a bowling game.  The instructions are in the readme. We want to use TDD to slowly develop our solution one step at the time usign the red-green-refactor plan. Let's start with a simple test to start driving the solution.

After that, it would implement a test, and wait for me to accept it, prompt me to run it.  Cursor now lets to _auto-run_ commands so you don't have to accept the command.  Mighe be dangerous to turn that on permanently since it can run **any** commands on my machine.

At the end it wrote a corner-case test for the end of the game, which was cool, and it refactored some expressions into function.  It all made sense.

The other nice thing about this model is that it oferred to do the refactor without being prompted.

I think this problem is very well understood to models.  I will have to try something it hasn't seen before to see how it does.