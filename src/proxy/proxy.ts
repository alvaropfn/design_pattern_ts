interface ISubject {
  request(): void;
}

class Subject implements ISubject {
  public request() {
    console.log("a real subject doing their stuff");
  }
}

class MyProxy implements ISubject {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  private checkAcces(): boolean {
    console.log("Proxy: cheking access for fire real request");
    return true;
  }

  private logAcces(): void {
    console.log(`Proxy: logging access at: ${new Date().getTime()}`);
  }

  public request() {
    if (this.checkAcces()) {
      this.subject.request();
      this.logAcces();
    }
  }
}

export { Subject, MyProxy };
