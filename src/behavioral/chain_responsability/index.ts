import { Handler, HandlerOne, HandlerTwo, HandlerTre } from "./chain";

function _(handler: Handler, request: string) {
  const result: string | null = handler.handle(request);

  if (result) {
    console.log(result);
  } else {
    console.log("request as untouched");
  }
}

const one = new HandlerOne();
const two = new HandlerTwo();
const tre = new HandlerTre();

one.setNext(two).setNext(tre);

_(one, "three");
_(two, "one");
