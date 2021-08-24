"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./decorator");
function _(component) {
    console.log(component.doStuff());
}
const undecoreted = new decorator_1.Component();
_(undecoreted);
const decoretedOne = new decorator_1.DecoratorOne(undecoreted);
const decoretedTwo = new decorator_1.DecoratorTwo(decoretedOne);
_(decoretedTwo);
//# sourceMappingURL=index.js.map