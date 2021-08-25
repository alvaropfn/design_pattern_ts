import { Facade, SubsystemOne, SubsystemTwo } from "./facade";

function _(facade: Facade) {
  console.log(facade.doStuff());
}

const one = new SubsystemOne();
const two = new SubsystemTwo();
const facade = new Facade(one, two);

_(facade);
