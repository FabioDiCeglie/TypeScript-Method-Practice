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

// REST operators

const login = (method: string, ...options: number[]) => {
  //   console.log(method); // facebook
  //   console.log(options); // ["facebook", 1,2,3,4]
};
login("facebook", 1, 2, 3, 4);
