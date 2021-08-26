"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProxy = exports.Subject = void 0;
class Subject {
    request() {
        console.log("a real subject doing their stuff");
    }
}
exports.Subject = Subject;
class MyProxy {
    subject;
    constructor(subject) {
        this.subject = subject;
    }
    checkAcces() {
        console.log("Proxy: cheking access for fire real request");
        return true;
    }
    logAcces() {
        console.log(`Proxy: logging access at: ${new Date().getTime()}`);
    }
    request() {
        if (this.checkAcces()) {
            this.subject.request();
            this.logAcces();
        }
    }
}
exports.MyProxy = MyProxy;
//# sourceMappingURL=proxy.js.map