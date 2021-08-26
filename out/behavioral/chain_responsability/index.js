"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chain_1 = require("./chain");
function _(handler, request) {
    const result = handler.handle(request);
    if (result) {
        console.log(result);
    }
    else {
        console.log("request as untouched");
    }
}
const one = new chain_1.HandlerOne();
const two = new chain_1.HandlerTwo();
const tre = new chain_1.HandlerTre();
one.setNext(two).setNext(tre);
_(one, "three");
_(two, "one");
//# sourceMappingURL=index.js.map