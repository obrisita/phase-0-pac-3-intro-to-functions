/*
function doNothing() {}
function sayHello() {
console.log("Hello!");
}
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}
sayHelloToIsabel();

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}
sayHelloToSofia();

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}
sayHelloToBrendan();


sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();
*/

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel");
  sayHelloTo("Jane");
  sayHelloTo("R2-D2");

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));

function add(x, y) {
  x + y;
}
return(add(1, 2));

const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));