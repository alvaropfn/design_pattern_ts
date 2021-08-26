import { Component, DecoratorOne, DecoratorTwo } from "./decorator";

function _(component: Component) {
  console.log(component.doStuff());
}

const undecoreted = new Component();
_(undecoreted);

const decoretedOne = new DecoratorOne(undecoreted);
const decoretedTwo = new DecoratorTwo(decoretedOne);

_(decoretedTwo);
