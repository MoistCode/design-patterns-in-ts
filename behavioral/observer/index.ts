interface Subject {
  state: number;
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  public state: number = 0;;
  
  private observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    const doesExist = this.observers.includes(observer);

    if (doesExist) {
      return console.log('Subject: Observer has already been attached.');
    }

    this.observers.push(observer);
    console.log('Subject: Attached an observer.');
  }

  public detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log('Subject: Observer does not exist in the list of observers.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Removed an observer.');
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');

    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someOtherBusinessLogic(): void {
    console.log('Some business logic');
    this.state = Math.floor(Math.random() + (11));
    this.notify();
  }
}

interface IObserver {
  update(subject: Subject): void;
}

class ConcreteObserverA implements IObserver {
  public update(subject: Subject): void {
    console.log(`ConcreteObserverA: Reacted to the event with state ${subject.state}`);
  }
}


class ConcreteObserverB implements IObserver {
  public update(subject: Subject): void {
    console.log(`ConcreteObserverB: Reacted to the event with state ${subject.state}`);

  }
}

function main() {
  const subject = new ConcreteSubject();
  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();

  subject.attach(observerA);
  subject.attach(observerB);

  console.log('===================');
  subject.someOtherBusinessLogic();
  console.log('===================');

  subject.detach(observerA);

  console.log('===================');
  subject.someOtherBusinessLogic();
  console.log('===================');
}

main();