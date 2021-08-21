"use strict";
// abstract products
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductB2 = exports.ProductA2 = exports.ProductB1 = exports.ProductA1 = void 0;
// concrete products
var ProductA1 = /** @class */ (function () {
    function ProductA1() {
    }
    ProductA1.prototype.doStuff = function () {
        return "Product A1";
    };
    return ProductA1;
}());
exports.ProductA1 = ProductA1;
var ProductB1 = /** @class */ (function () {
    function ProductB1() {
    }
    ProductB1.prototype.doStuff = function () {
        return "Product B1";
    };
    ProductB1.prototype.anotherStuff = function (product) {
        return "product B1 with help of " + product.doStuff();
    };
    return ProductB1;
}());
exports.ProductB1 = ProductB1;
var ProductA2 = /** @class */ (function () {
    function ProductA2() {
    }
    ProductA2.prototype.doStuff = function () {
        return "Product A2";
    };
    return ProductA2;
}());
exports.ProductA2 = ProductA2;
var ProductB2 = /** @class */ (function () {
    function ProductB2() {
    }
    ProductB2.prototype.doStuff = function () {
        return "Product B2";
    };
    ProductB2.prototype.anotherStuff = function (product) {
        return "product B2 with help of " + product.doStuff();
    };
    return ProductB2;
}());
exports.ProductB2 = ProductB2;
//# sourceMappingURL=products.js.map