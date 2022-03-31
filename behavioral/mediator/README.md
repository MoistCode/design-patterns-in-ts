# Mediator Pattern

## Resources
* https://refactoring.guru/design-patterns/mediator
* https://refactoring.guru/design-patterns/mediator/typescript/example

## Problem
* Say you have a form where certain form elements can communicate with one
  another (i.e., checking a checkbox reveals additional options). Implementing
  this logic into the form elements makes them harder to reuse due to coupling.

## Solution
* Remove all communication between elements and instead, use a mediator that
  handles redirecting calls to the appropriate component. This makes it so
  the elements are coupled to a single mediator object instead of multiple
  elements.

## Example
* Redux state is handled by sending actions to Redux and they will handle the
  state management. Each component is responsible for sending a single action
  and Redux manages what to do with other components.

* A real world example would be aircraft pilots. They don't need to communicate
  with one another. Instead, their communication goes through the control
  tower.