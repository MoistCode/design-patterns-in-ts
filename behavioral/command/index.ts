interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: Printing payload... ${this.payload}`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): void {
    console.log('ComplexCommand: running execute...');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: working on ${a}.`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on ${b}`);
  }
}

class Invoker {
  private onStart: Command;
  private onFinish: Command;

  constructor(onStart: Command, onFinish: Command) {
    this.onStart = onStart;
    this.onFinish = onFinish;
  }

  public doSomethingImportant(): void {
    console.log('Invoker: about to do something important');

    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ran onStart');
    console.log('Invoker: about to be finished');

    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}

const receiver = new Receiver();

const invoker = new Invoker(
  new SimpleCommand('Say Hi'),
  new ComplexCommand(receiver, 'Send email', 'Save report'),
);

invoker.doSomethingImportant();