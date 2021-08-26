class Facade {
  protected subsystemOne: SubsystemOne | null;
  protected subsystemTwo: SubsystemTwo | null;

  constructor(
    subsystemOne: SubsystemOne = null,
    subsystemTwo: SubsystemTwo = null
  ) {
    this.subsystemOne = subsystemOne || new SubsystemOne();
    this.subsystemTwo = subsystemTwo || new SubsystemTwo();
  }

  public doStuff(): string {
    let result = `facade initialize:\n`;
    result += this.subsystemOne.prepareStuff();
    result += this.subsystemTwo.prepareStuff();
    result += `performing actions\n`;
    result += this.subsystemOne.doStuffOne();
    result += this.subsystemTwo.doStuffTwo();
    return result;
  }
}

class SubsystemOne {
  public prepareStuff(): string {
    return "subsysem one ready\n";
  }

  public doStuffOne(): string {
    return "subsystem one runing fine\n";
  }
}

class SubsystemTwo {
  public prepareStuff(): string {
    return "subsysem two ready\n";
  }

  public doStuffTwo(): string {
    return "subsystem two doing things\n";
  }
}

export { Facade, SubsystemOne, SubsystemTwo };
