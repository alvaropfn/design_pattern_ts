"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bridge_1 = require("./bridge");
function _(abstraction) {
    console.log(abstraction.doStuff());
}
const implementationA = new bridge_1.ImplementationOne();
const abstractionA = new bridge_1.Abstraction(implementationA);
_(abstractionA);
const implementationB = new bridge_1.ImplementationTwo();
const abstractionB = new bridge_1.ExtendedAbstraction(implementationB);
_(abstractionB);
//# sourceMappingURL=index.js.map