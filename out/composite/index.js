"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composite_1 = require("./composite");
function _(component) {
    console.log(`Result: ${component.doStuff()}`);
}
const leaf = new composite_1.Leaf();
_(leaf);
console.log("#############");
const tree = new composite_1.Composite();
const branch1 = new composite_1.Composite();
const branch2 = new composite_1.Composite();
branch1.add(new composite_1.Leaf());
branch2.add(new composite_1.Leaf());
branch2.add(new composite_1.Leaf());
tree.add(branch1);
tree.add(branch2);
_(tree);
//# sourceMappingURL=index.js.map