interface IHandler {
  setNext(handler: IHandler): IHandler;

  handle(request: string): string | null;
}

abstract class Handler implements IHandler {
  private nxtHandler: IHandler;

  setNext(handler: IHandler): IHandler {
    this.nxtHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nxtHandler) {
      return this.nxtHandler.handle(request);
    }
    return null;
  }
}

class HandlerOne extends Handler {
  public handle(request: string) {
    if (request.includes("one")) {
      return `i will take this ${request}`;
    }
    return super.handle(request);
  }
}

class HandlerTwo extends Handler {
  public handle(request: string) {
    if (request.includes("two")) {
      return `i will have those ${request}`;
    }
    return super.handle(request);
  }
}

class HandlerTre extends Handler {
  public handle(request: string) {
    if (request.includes("three")) {
      return `i will care all ${request}`;
    }
    return super.handle(request);
  }
}

export { Handler, HandlerOne, HandlerTwo, HandlerTre };
