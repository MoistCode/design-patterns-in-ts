# Strategy Pattern

## Resources
* [Christopher Okhravi Strategy Pattern](https://www.youtube.com/watch?v=v9ejT8FO-7I&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc)
* https://refactoring.guru/design-patterns/strategy
* [Examples in TS](https://refactoring.guru/design-patterns/strategy/typescript/example)

## Problem
Adding additional algorithms can quickly get messy as changes building on top
  of one another in the same classes can turn the classes into a catch-all. This
  also introduces problems with working with others as everyone would need to
  resolve merge conflicts as well as ensuring that the already working code is
  still working.

## Solution
Decouple the algorithm and allow algorithms to be implemented separately.
Algorithms are now in separate classes and their objects are interchangable
since they'll implement a certain behavior. This usage of composition rather
than inheritance makes it easier to re-use algorithsm, maintain algorithms, and
add new algorithms.

## Terms
* `Strategies`: separate classes that do sepcific things in a lot of different
  ways. The algorithms.
* `Context`: the original class that must have a field for storing a reference
  to the used strategies. The context delgates execution to the chosen concrete
  strategy.

## Example
* Consider a collection implementation. If a sorting algorithm is implemented
  on the collection then the algorithm cannot be changed. Strategy pattern
  allows sorting algorithm to be injected which allows consumers to determine
  which ones to use. Used algorithms can be changed as long as the signature
  remains the same. New algorithms can be made and consumers can decide when to
  inject it.

* In OOP, we can do this by creating interfaces such as `IFlyingStrategy` which a
  `Duck` class would implement. The different algorithms would then be under
  something like `SimpleFlyingStrategy`, `ComplexFlyingStrategy`,
  `NoFlyingStrategy`, etc... which would implement `IFlyingStrategy`. This way,
  additional flying behavior can be added and shared without affected classes
  that inherit from the `Duck` class.