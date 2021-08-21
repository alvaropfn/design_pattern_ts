import {
  Abstraction,
  ExtendedAbstraction,
  ImplementationOne,
  ImplementationTwo,
} from "./bridge";

function _(abstraction: Abstraction) {
  console.log(abstraction.doStuff());
}

const implementationA = new ImplementationOne();
const abstractionA = new Abstraction(implementationA);
_(abstractionA);

const implementationB = new ImplementationTwo();
const abstractionB = new ExtendedAbstraction(implementationB);
_(abstractionB);
