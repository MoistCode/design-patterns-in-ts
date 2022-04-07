# State Pattern

## Resources
* https://refactoring.guru/design-patterns/state
* https://refactoring.guru/design-patterns/state/typescript/example

## Problem
* Programs can be in a finite number of states and within each unique state, the
  program behaves a certain way and can be changed instantaneously. State
  machines are usually implemented with lots of conditional operators. Adding
  additional states can end up making code difficult to maintain.

## Solution
* The State pattern suggests a creation of new classes for all possible states.
  The original object, called the `context` stores a reference to one of these
  states which performs the state-related work for said object.

## Example
* Imagine a `Document` class that can be in three states: `Draft`, `Moderation`,
  and `Published`. The `publish` method works differently depending on the state
  of the `Document`. `publish` moves `Draft`s into `Moderation` and `Moderation`
  into a public if the user is an admin and in `Published`, it does not do
  anything at all.