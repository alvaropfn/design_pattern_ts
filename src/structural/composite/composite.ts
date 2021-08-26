abstract class Component {
  protected _parent: Component | null;

  public set parent(parent: Component | null) {
    this._parent = parent;
  }

  public get parent(): Component | null {
    return this._parent;
  }

  public add(Component: Component): void {}
  public del(Component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract doStuff(): string;
}

class Leaf extends Component {
  public doStuff() {
    return "a leaf - ";
  }
}

class Composite extends Component {
  protected children: Array<Component> = new Array<Component>();

  public doStuff(): string {
    let result = "branch = ";

    this.children.forEach((child) => {
      result += child.doStuff();
    });
    return `root: ${result}\n`;
  }

  public add(component: Component) {
    this.children.push(component);
  }

  public del(component: Component) {
    const componentIndex = this.children.indexOf(component);
    if (componentIndex >= 0) {
      this.children.splice(componentIndex, 1);
      component.parent = null;
    }
  }
}

export { Component, Leaf, Composite };
