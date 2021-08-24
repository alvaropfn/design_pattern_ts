"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorTwo = exports.DecoratorOne = exports.Component = void 0;
class Component {
    doStuff() {
        return "concrete component doing their stuff";
    }
}
exports.Component = Component;
class Decorator {
    component;
    constructor(component) {
        this.component = component;
    }
    doStuff() {
        return this.component.doStuff();
    }
}
class DecoratorOne extends Decorator {
    doStuff() {
        return `DecoratorOne over ${super.doStuff()}`;
    }
}
exports.DecoratorOne = DecoratorOne;
class DecoratorTwo extends Decorator {
    doStuff() {
        return `DecoratorTwo over${super.doStuff()}`;
    }
}
exports.DecoratorTwo = DecoratorTwo;
//# sourceMappingURL=decorator.js.map