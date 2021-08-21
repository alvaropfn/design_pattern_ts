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
exports.Adapter = exports.Adaptee = exports.Target = void 0;
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.doStuff = function () {
        return "do stuff as desired";
    };
    return Target;
}());
exports.Target = Target;
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.doStuffDifferent = function () {
        return "do different aprouch";
    };
    return Adaptee;
}());
exports.Adaptee = Adaptee;
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.doStuff = function () {
        return _super.prototype.doStuff.call(this) + " but with " + this.adaptee.doStuffDifferent();
    };
    return Adapter;
}(Target));
exports.Adapter = Adapter;
//# sourceMappingURL=adapter.js.map