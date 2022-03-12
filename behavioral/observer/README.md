# Observer Pattern

## Resources
* [Christopher Okhravi Observer Pattern]()
* https://refactoring.guru/design-patterns/observer
* [Examples in TS](https://refactoring.guru/design-patterns/observer/typescript/example)

## Problem
Imagine a `Customer` and a `Store` where the `Customer` is interested in when
the `Store` will start selling iPhones. In order to keep up with it, the
`Customer` would need to come to the store constantly making it a lot of work
especially if there are multiple `Customers`s.

The store could send out a bunch of emails (spam much?) to all `Customer`s each
time a product is available. That would save `Customer` time but upset others
that aren't interested.

## Solution
The `Customer` (Subscriber) will be listening to changes from the `Store`
(Publisher) about the iPhone (Subject). This is similar to subscribing to an
email.

## Terms
* `Subject`: object that is interested in by the subscribers.
* `Subscriber`: object that is listening for changes.
* `Publisher`: object that carries said subjects and sends events related to 
  the subject.

## Example
* In OOP, imagine a `Publisher` and `Subscriber` class where the `Publisher`
  contains a method that listens to a change event. The `Publisher` class would
  also contain an array with the interested `Subscriber`s. Each time a change
  is made, the `Publisher` class calls a `notifyAllSubscribers()` method that
  sends an event to them. `Subscriber`s can unsubscribe and remove itself from
  the array.