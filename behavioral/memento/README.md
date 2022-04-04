# Memento Pattern

## Resources
* https://refactoring.guru/design-patterns/memento

## Problem
* You have a text editor app that can format text, insert inline images, etc...
  and at some point, you decide to let users undo any text operations. To save
  a snapshot of the history, you'll need a few things such as access which isn't
  always guarenteed. Not only is this a problem but future modifications to
  fields will require modification of the class copying information over to the
  stack of snapshots.

## Solution
* These problems are caused by broken encapsulation. Some objects are trying to
  do more than they're suppose to. The Memento pattern delegates creation of the
  state snapshots to the actual owners of said state, the originator object. Now
  each object is responsible for saving their own snapshot. Memento is a special
  object meant to store a copy of the object's state and is only accessible by
  the originator object. Other objects may communicate with mementos in order to
  get metadata of the originator object.