"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("./factory");
function _(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productA.doStuff());
    console.log(productB.anotherStuff(productA));
}
_(new factory_1.ConcreteFactory1());
_(new factory_1.ConcreteFactory2());
//# sourceMappingURL=index.js.map