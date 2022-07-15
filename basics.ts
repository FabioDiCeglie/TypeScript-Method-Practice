// Does javascript pass variables by reference or by value?

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
