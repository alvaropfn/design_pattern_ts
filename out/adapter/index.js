"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adapter_1 = require("./adapter");
function _() {
    var target = new adapter_1.Target();
    var adaptee = new adapter_1.Adaptee();
    var adapter = new adapter_1.Adapter(adaptee);
    console.log(target.doStuff());
    console.log(adaptee.doStuffDifferent());
    console.log(adapter.doStuff());
}
_();
//# sourceMappingURL=index.js.map