interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string|null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler|null;

  constructor(handler: Handler|null) {
    this.nextHandler = handler;
  }

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string|null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string|null {
    if (request === 'Banana') {
      return `Monkey Req: ${request}`;
    }

    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string|null {
    if (request === 'Nut') {
      return `Squirrel Req: ${request}`;
    }

    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string|null {
    if (request === 'Bone') {
      return `Dog Req: ${request}`;
    }

    return super.handle(request);
  }
}

function main(handler: Handler): void {
  const foods = ['Nut', 'Banana', 'Bone', 'Cow'];

  for (const food of foods) {
    console.log(`Client Req: ${food}`);

    const result = handler.handle(food);

    if (result) {
      console.log(`${food} was handled`);
    } else {
      console.log(`${food} was _NOT_ handled`);
    }
  }
}

const monkey = new MonkeyHandler(null);
const squirrel = new SquirrelHandler(monkey);
const dog = new DogHandler(squirrel);

main(monkey);
main(squirrel);
main(dog);