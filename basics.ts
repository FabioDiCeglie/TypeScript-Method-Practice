// Does javascript pass variables by reference or by value?

import { resolve } from "path";

// Passing by value
// means is passing a copy of A and anything you do inside that function
// will not effect the var in the global scope
const a = 1;
const foo: (a: number) => void = (a) => {
  a = 2;
};
foo(a);
// console.log(a); // 1

// Passing by reference
// means that when you pass an object by reference
// and you change that proprety whitin the function
// the change will be reflected in the outer scope
const b = {};
const fee = (b: {}) => {
  // @ts-ignore
  b.moo = false;
};
fee(b);
// console.log(b); // {moo: false}

// Passing by value primitive types : string,number,boolean
// Passing by reference : object

// -----------------------------------

// REST operator

const login = (method: string, ...options: number[]) => {
  //   console.log(method); // facebook
  //   console.log(options); // ["facebook", 1,2,3,4]
};
login("facebook", 1, 2, 3, 4);

// Spread operator

// looks like the rest operator but as a different effect

const ar1 = [4, 5, 6];
const ar2 = [1, 2, 3, ...ar1]; // [ 1,2,3,4,5,6]
const copyArray = [...ar1];

const meth = "facebook";
const opt = ["ciao", "ciao"];
const login2 = (method: string, ...options: string[]) => {
  //   console.log(method); // facebook
  //   console.log(options); // [ "ciao", "ciao"]
};
login2(meth, ...opt);

// Use spread operators for manipulating arrays and then also when
// you want to explode arguments and pass it in a function.

// --------------------------------

// Primitive types
// Boolean-Number-String-Null-Undefined-Object

// Differents from == and ===
// Double quotes try to convert the type
// "" == "0"; // false
// "0" == "0"; // true
// 0 == "0"; //true convert 0 in type string
// false == "false"; //false because try to convert the boolean in a string not working!
// // Look also the equality table

// triple equals return true only if the value and the type
// 0 === " "; // false
// 0 === "0"; // false

// NaN compare with itself is always false

// -------------------------

// What are function closures?

var fooo = [];
for (var i = 0; i < 10; i++) {
  // @ts-ignore
  fooo[i] = function () {
    return i;
  };
}

// console.log(fooo[0]());
// console.log(fooo[1]());
// console.log(fooo[2]());

// it print 10 10 10
// when we return i we gonna return always 10
// if we want to return 1-2-3

var foooo: any[] = [];
for (var i = 0; i < 10; i++) {
  (function () {
    let y = i;
    // @ts-ignore
    foooo[i] = function () {
      return y;
    };
  })();
}
// console.log(foooo[0]());
// console.log(foooo[1]());

// it print 0-1

// --------------------------------------------------

// Destructuring & Looping

// Destructuring
const obj = { first: "Asim", last: "Hus", age: 40 };

const { first: f, last: l } = obj;
// Better this way
const { first, last } = obj;
// console.log(f) first: "Asim"
// console.log(l) last: "Hus"

// Array destructuring

const arr = ["a", "b"];
const [x, y] = arr;
// console.log(x) a
// console.log(y) b

// --------------------------------------------------

// In ForEach we can t use break and continue statement remember!

// For-in Loop in object properties doesn t work in array

const obje = { a: 1, b: 2 };

for (let prop in obj) {
  //   console.log(prop); a b
}

// For-of we use it for array

let array = [1, 2, 3];
for (let prop of array) {
  //   console.log(prop); 1 2 3
}

// --------------------------------------------------

// Keyword this ( call(), apply())

function example(b, c, d) {
  // console.log(this); 1
  // console.log(b); // 2
  // console.log(c); // 3
  // console.log(d); // 4
}

example.call(1, 2, 3, 4);
example.apply(1, [2, 3, 4]);

// Why call or apply?
// if you want use apply when you want to call a function and for
// example you want a sum of an array of number so use pass an array as a param

// --------------------------------------------------

// JavaScript is a Prototypal inheritance, but has Pseudo-Classical pattern
// and Prototype pattern, the classical will be familiar if you come from
// another languages and is actually having a class and then we create an instance
// of that class. JavaScript is a prototypal like building an house on
// another house.

// --------------------------------------------------

// Class and extends features
class Person {
  firstName = "";
  lastName = "";

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set firstname(name: string) {
    if (name === "") {
      console.error("first name cannot be blank");
    } else {
      this.firstName = name;
    }
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  whoAreYou() {
    return `Hi I'm ${this.fullName()}`;
  }
}

let asim = new Person("Fabio", "dc");
asim.whoAreYou(); // "Hi Im Fabio dc"

class Student extends Person {
  course = "";

  constructor(firstName: string, lastName: string, course: string) {
    super(firstName, lastName);
    this.course = course;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}

let asi = new Student("Fabio", "dc", "programming");
asi.whoAreYou(); // "Hi Im Fabio dc and im studying programming"

// --------------------------------------------------

// Asychronous programming

// What is a callback?

function doAsyncTask(cb) {
  setTimeout(() => {
    cb(null, "correct data");
  }, 0);
}
doAsyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(message), data;
  }
});

let message = "call";

// --------------------------------------------------

// Promise all

//  const doAsyncTask = (delay) => {
//   return new Promise(resolve => setTimeout() => resolve(delay), delay)
//  }

// let promises = [doAsyncTask(1000), doAsyncTask(500), doAsyncTask(800)];

// Promise.all(promises);

// --------------------------------------------------

// Async/await
