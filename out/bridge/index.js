"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bridge_1 = require("./bridge");
function _(abstraction) {
    console.log(abstraction.doStuff());
}
var implementationA = new bridge_1.ImplementationOne();
var abstractionA = new bridge_1.Abstraction(implementationA);
_(abstractionA);
var implementationB = new bridge_1.ImplementationTwo();
var abstractionB = new bridge_1.ExtendedAbstraction(implementationB);
_(abstractionB);
//# sourceMappingURL=index.js.map