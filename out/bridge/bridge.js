"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationTwo = exports.ImplementationOne = exports.ExtendedAbstraction = exports.Abstraction = void 0;
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.doStuff = function () {
        var result = this.implementation.doStuff();
        return result + " for abstraction";
    };
    return Abstraction;
}());
exports.Abstraction = Abstraction;
var ExtendedAbstraction = /** @class */ (function (_super) {
    __extends(ExtendedAbstraction, _super);
    function ExtendedAbstraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedAbstraction.prototype.doStuff = function () {
        var result = this.implementation.doStuff();
        return result + " for extended abstraction";
    };
    return ExtendedAbstraction;
}(Abstraction));
exports.ExtendedAbstraction = ExtendedAbstraction;
var ImplementationOne = /** @class */ (function () {
    function ImplementationOne() {
    }
    ImplementationOne.prototype.doStuff = function () {
        return "concrete implementation in Plataform one";
    };
    return ImplementationOne;
}());
exports.ImplementationOne = ImplementationOne;
var ImplementationTwo = /** @class */ (function () {
    function ImplementationTwo() {
    }
    ImplementationTwo.prototype.doStuff = function () {
        return "concrete implementation in Plataform two";
    };
    return ImplementationTwo;
}());
exports.ImplementationTwo = ImplementationTwo;
//# sourceMappingURL=bridge.js.map