"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facade_1 = require("./facade");
function _(facade) {
    console.log(facade.doStuff());
}
const one = new facade_1.SubsystemOne();
const two = new facade_1.SubsystemTwo();
const facade = new facade_1.Facade(one, two);
_(facade);
//# sourceMappingURL=index.js.map