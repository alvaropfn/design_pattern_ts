"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = exports.ConcreteFactory1 = void 0;
var products_1 = require("./products");
// concrete factories
var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function () {
        return new products_1.ProductA1();
    };
    ConcreteFactory1.prototype.createProductB = function () {
        return new products_1.ProductB1();
    };
    return ConcreteFactory1;
}());
exports.ConcreteFactory1 = ConcreteFactory1;
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new products_1.ProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new products_1.ProductB2();
    };
    return ConcreteFactory2;
}());
exports.ConcreteFactory2 = ConcreteFactory2;
//# sourceMappingURL=factory.js.map