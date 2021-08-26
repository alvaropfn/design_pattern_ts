"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_1 = require("./proxy");
function _(subject) {
    subject.request();
}
const aSubject = new proxy_1.Subject();
const aProxy = new proxy_1.MyProxy(aSubject);
_(aSubject);
_(aProxy);
//# sourceMappingURL=index.js.map