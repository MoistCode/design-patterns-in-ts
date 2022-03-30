# Chain of Responsibility Pattern

## Resources
* https://refactoring.guru/design-patterns/iterator
* https://refactoring.guru/design-patterns/iterator/typescript/example

## Problem
* Collections are commonly and can be implemented differently (trees, stacks,
  lists, graphs, etc...) and need a way to traverse them without hitting hitting
  the same element twice. For a list, this is simple but complex data structures
  such as trees can be tricky.

## Solution
* Extract the traversal behavior of a collection into a separate object called
  an iterator. If a new way to traverse the collection is required then a new
  iterator class can be created.

## Example
* You're in Rome and want to find the quickest way from point A to point B.
  Different iterators may be `BikeIterator`, `WalkIterator`, `CarIterator`,
  etc... which implements different ways to get to the final destination. Each
  have their own nodes to traverse since we may not want people to bike or walk
  at certain intersections for cars.