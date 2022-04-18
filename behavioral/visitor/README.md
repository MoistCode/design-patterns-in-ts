# Visitor Pattern

## Resources
* https://refactoring.guru/design-patterns/visitor

## Problem
* A behavior is required in a class but the class can be fragile. Any additional
  changes to this behavior would require the class(es) to be changed again.

## Solution
* Place the new behavior into a sepaarate class called a `visitor`. The classes
  in "Problem" are now passed to the `visitor` as an argument.

## Example