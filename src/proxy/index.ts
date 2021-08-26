import { Subject, MyProxy } from "./proxy";

function _(subject: Subject) {
  subject.request();
}

const aSubject = new Subject();
const aProxy = new MyProxy(aSubject);

_(aSubject);
_(aProxy);
