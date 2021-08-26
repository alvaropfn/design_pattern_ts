interface Implementation {
  doStuff(): string;
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public doStuff(): string {
    const result = this.implementation.doStuff();
    return `${result} for abstraction`;
  }
}

class ExtendedAbstraction extends Abstraction {
  doStuff(): string {
    const result = this.implementation.doStuff();
    return `${result} for extended abstraction`;
  }
}

class ImplementationOne implements Implementation {
  doStuff(): string {
    return "concrete implementation in Plataform one";
  }
}

class ImplementationTwo implements Implementation {
  doStuff(): string {
    return "concrete implementation in Plataform two";
  }
}

export {
  Implementation,
  Abstraction,
  ExtendedAbstraction,
  ImplementationOne,
  ImplementationTwo,
};
