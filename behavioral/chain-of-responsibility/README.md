# Chain of Responsibility Pattern

## Resources
* https://refactoring.guru/design-patterns/chain-of-responsibility/typescript/example
* https://refactoring.guru/design-patterns/chain-of-responsibility

## Problem
* Authorization will require checks before performing any actions. Later on,
  additional checks are required which ends up making the code turn into a
  mess of logical flows making it bloated and harder to spot any bugs.

## Solution
* Transformation of behaviors into handlers. Each check is extracted into their
  own class with a single method that performs the check. Each of these checks
  have a reference to the next handler in the chain and passes the request
  further along the chain until all handlers process it. Each handler can decide
  to not pass the request down the chain.

* A different approach could be a chain of handlers where only ONE needs to
  process the request (one or none). This is commong with dealing with events
  in a stack of elements within a GUI (propagation).

## Example
* You need help with your computer. You are routed to an automated message on
  the phone which then routes you to an operator then finally an engineer. Each
  tier ends up trying to handle your problem in some way but since they can't,
  the problem is attempted to be handled by the next handler.