"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composite = exports.Leaf = exports.Component = void 0;
class Component {
    _parent;
    set parent(parent) {
        this._parent = parent;
    }
    get parent() {
        return this._parent;
    }
    add(Component) { }
    del(Component) { }
    isComposite() {
        return false;
    }
}
exports.Component = Component;
class Leaf extends Component {
    doStuff() {
        return "a leaf - ";
    }
}
exports.Leaf = Leaf;
class Composite extends Component {
    children = new Array();
    doStuff() {
        let result = "branch = ";
        this.children.forEach((child) => {
            result += child.doStuff();
        });
        return `root: ${result}\n`;
    }
    add(component) {
        this.children.push(component);
    }
    del(component) {
        const componentIndex = this.children.indexOf(component);
        if (componentIndex >= 0) {
            this.children.splice(componentIndex, 1);
            component.parent = null;
        }
    }
}
exports.Composite = Composite;
//# sourceMappingURL=composite.js.map