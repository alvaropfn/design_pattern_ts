interface IComponent {
  doStuff(): string;
}

class Component implements IComponent {
  public doStuff(): string {
    return "concrete component doing their stuff";
  }
}

class Decorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  public doStuff() {
    return this.component.doStuff();
  }
}

class DecoratorOne extends Decorator {
  public doStuff() {
    return `DecoratorOne over ${super.doStuff()}`;
  }
}

class DecoratorTwo extends Decorator {
  public doStuff() {
    return `DecoratorTwo over${super.doStuff()}`;
  }
}

export { Component, DecoratorOne, DecoratorTwo };
