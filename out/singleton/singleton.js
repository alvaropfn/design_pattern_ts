"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.doStuff = function () {
        console.log("doing stuff");
    };
    return Singleton;
}());
exports.default = Singleton;
//# sourceMappingURL=singleton.js.map