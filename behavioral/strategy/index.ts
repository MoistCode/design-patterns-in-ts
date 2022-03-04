class Context {
    private _strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this._strategy = strategy;
    }

    public set strategy(strategy: IStrategy) {
        this._strategy = strategy;
    }

    public runSomeBusinessLogic(): string[] {
        console.log('Context: Sorting data using the strategy.');
        const result = this._strategy.runAlgorithm(
            ['a', 'd', 'c', 'e', 'g', 'q']
        );
        console.log(`Result of running strategy: ${result}`);

        return result;
    }
}

interface IStrategy {
    runAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements IStrategy {
    public runAlgorithm(data: string[]): string[] {
        console.log('ConcreteStrategyA running...');
        const result = data.sort();

        return result;
    }
}

class ConcreteStrategyB implements IStrategy {
    public runAlgorithm(data: string[]): string[] {
        console.log('ConcreteStrategyB running...');
        const result = data.reverse();

        return result;
    }
}

function main(): void {
    let strA = new ConcreteStrategyA();
    let strB = new ConcreteStrategyB();

    const context = new Context(strA);
    context.runSomeBusinessLogic();

    context.strategy = strB;
    context.runSomeBusinessLogic();
}

main();