# Observer Pattern

## Resources
* [Christopher Okhravi Observer Pattern](https://www.youtube.com/watch?v=9qA5kw8dcSU&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc&index=7)
* https://refactoring.guru/design-patterns/command

## Problem
* Take a toolbar for a text editor that has many buttons that do certain things
  such as copying text. Other places of the application will also have this
  functionality but we can't simply keep making this functionality in different
  subclasses like a `Button` subclass or a `MenuItem` subclass.

## Solution
* Implement the functionality as commands that can be passed around. This way,
  we won't need seprate `Button`s or `MenuItem`s and instead, they will be
  linked to commands.

## Terms
* `command`: single method to execute
* `invoker`: responsible for initiating requests
* `receiver`: contains business logic
* `client`: creates and configured concrete command objects

## Example
* Universal remote control that controls the TV. The commands in the remote is
  not hardcoded. Instead, it supports different commands and as long as the
  command implements their interface supported by the universal remote, it can
  be ran.
