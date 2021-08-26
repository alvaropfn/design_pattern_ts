"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubsystemTwo = exports.SubsystemOne = exports.Facade = void 0;
class Facade {
    subsystemOne;
    subsystemTwo;
    constructor(subsystemOne = null, subsystemTwo = null) {
        this.subsystemOne = subsystemOne || new SubsystemOne();
        this.subsystemTwo = subsystemTwo || new SubsystemTwo();
    }
    doStuff() {
        let result = `facade initialize:\n`;
        result += this.subsystemOne.prepareStuff();
        result += this.subsystemTwo.prepareStuff();
        result += `performing actions\n`;
        result += this.subsystemOne.doStuffOne();
        result += this.subsystemTwo.doStuffTwo();
        return result;
    }
}
exports.Facade = Facade;
class SubsystemOne {
    prepareStuff() {
        return "subsysem one ready\n";
    }
    doStuffOne() {
        return "subsystem one runing fine\n";
    }
}
exports.SubsystemOne = SubsystemOne;
class SubsystemTwo {
    prepareStuff() {
        return "subsysem two ready\n";
    }
    doStuffTwo() {
        return "subsystem two doing things\n";
    }
}
exports.SubsystemTwo = SubsystemTwo;
//# sourceMappingURL=facade.js.map