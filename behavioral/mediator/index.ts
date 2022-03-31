interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacting to A and trigger ops:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator reacting to D and trigger ops:');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

class BaseComponent {
  protected mediator: Mediator|null;

  constructor(mediator: Mediator|null = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  public doA(): void {
    console.log('C1 A');
    this.mediator?.notify(this, 'A');
  }

  public doB(): void {
    console.log('C1 B');
    this.mediator?.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    console.log('C2 C');
    this.mediator?.notify(this, 'C');
  }

  public doD(): void {
    console.log('C2 D');
    this.mediator?.notify(this, 'D');
  }
}

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client trigger A');
c1.doA();

console.log('Client triggers D');
c2.doD();