import { Component, Leaf, Composite } from "./composite";

function _(component: Component) {
  console.log(`Result: ${component.doStuff()}`);
}

const leaf = new Leaf();

_(leaf);

console.log("#############");

const tree = new Composite();
const branch1 = new Composite();
const branch2 = new Composite();

branch1.add(new Leaf());
branch2.add(new Leaf());
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

_(tree);
