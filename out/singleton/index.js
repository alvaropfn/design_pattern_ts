"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singleton_1 = require("./singleton");
function _() {
    var s1 = singleton_1.default.getInstance();
    var s2 = singleton_1.default.getInstance();
    s1 === s2 ? console.log("same instances") : console.log("diff instances");
    s1.doStuff();
}
_();
//# sourceMappingURL=index.js.map