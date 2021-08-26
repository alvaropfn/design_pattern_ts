"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerTre = exports.HandlerTwo = exports.HandlerOne = exports.Handler = void 0;
class Handler {
    nxtHandler;
    setNext(handler) {
        this.nxtHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nxtHandler) {
            return this.nxtHandler.handle(request);
        }
        return null;
    }
}
exports.Handler = Handler;
class HandlerOne extends Handler {
    handle(request) {
        if (request.includes("one")) {
            return `i will take this ${request}`;
        }
        return super.handle(request);
    }
}
exports.HandlerOne = HandlerOne;
class HandlerTwo extends Handler {
    handle(request) {
        if (request.includes("two")) {
            return `i will have those ${request}`;
        }
        return super.handle(request);
    }
}
exports.HandlerTwo = HandlerTwo;
class HandlerTre extends Handler {
    handle(request) {
        if (request.includes("three")) {
            return `i will care all ${request}`;
        }
        return super.handle(request);
    }
}
exports.HandlerTre = HandlerTre;
//# sourceMappingURL=chain.js.map