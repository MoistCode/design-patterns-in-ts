class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator initial state: ${this.state}`);
  }

  public doSomething(): void {
    console.log('Originator doing something');
    this.state = this.generateRandomString(30);
    console.log(`Originator state changed to ${this.state}`);
  }

  private generateRandomString(length: number): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return new Array(length).fill(null)
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }

  public save(): Memento {
    console.log(`Originator saving state/creating memento with ${this.state}`);
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator restoring state to ${this.state}`);
  }
}

interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0,19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.slice(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('Caretaker saving originator state...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    const memento = this.mementos.pop();

    if (memento) {
      console.log(`Caretaker restoring state to ${memento.getName()}`);
      this.originator.restore(memento);
    }
  }

  public showHistory(): void {
    console.log('Caretaking showing list of mememtos...');

    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}

const originator = new Originator('Super duper super pooper super');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.showHistory();
caretaker.undo();
caretaker.undo();
caretaker.undo();
