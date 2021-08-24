"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationTwo = exports.ImplementationOne = exports.ExtendedAbstraction = exports.Abstraction = void 0;
class Abstraction {
    implementation;
    constructor(implementation) {
        this.implementation = implementation;
    }
    doStuff() {
        const result = this.implementation.doStuff();
        return `${result} for abstraction`;
    }
}
exports.Abstraction = Abstraction;
class ExtendedAbstraction extends Abstraction {
    doStuff() {
        const result = this.implementation.doStuff();
        return `${result} for extended abstraction`;
    }
}
exports.ExtendedAbstraction = ExtendedAbstraction;
class ImplementationOne {
    doStuff() {
        return "concrete implementation in Plataform one";
    }
}
exports.ImplementationOne = ImplementationOne;
class ImplementationTwo {
    doStuff() {
        return "concrete implementation in Plataform two";
    }
}
exports.ImplementationTwo = ImplementationTwo;
//# sourceMappingURL=bridge.js.map