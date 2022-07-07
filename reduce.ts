// Reduce an Array into a Single Object and count the duplicated string
const votes = ["angular", "react", "vanilla", "angular", "react", "vanilla"];

const initialValue = {};

const reducer = (prev: any, vote: any) => {
  if (!prev[vote]) {
    prev[vote] = 1;
  } else {
    prev[vote] = prev[vote] + 1;
  }

  return prev;
};

const result = votes.reduce(reducer, initialValue);

//Use Reduce to Filter and Map over large datasets

const data = [1, 2, 3];

// You can use also map here data.map(...)
const doubled = data.reduce((acc: number[], value: number) => {
  acc.push(value * 2);
  return acc;
}, []);

const data2 = [1, 2, 3, 4, 5, 6];
// You can use filter here! data2.filter(...)
const evens = data2.reduce((acc: number[], value: number) => {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

// The best is to write filter and map here but if you have a big array
// and you use reduce method gonna take much less time if you do the two operations
// together with map and filter gonna take 76ms but with reduce 54ms

// Avoid common mistakes when working with Reduce
// 1. Always pass in an initial value for your accumulator
// 2. Always make sure that you return the accumulator

// Learn to Flatten and Flatmap arrays with Reduce

const someData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flattenedData = someData.reduce((acc, value) => {
  return acc.concat(value);
}, []);

// result [ 1,2,3,4,5,6,7,8,9]

// We gonna use flatMap for get this ["test1",'test2','test3','test4']
const input = [
  {
    title: "test",
    cast: ["test1", "test2"],
  },
  {
    title: "test2",
    cast: ["test3", "test4"],
  },
  {
    title: "test",
    cast: ["test1", "test2"],
  },
  {
    title: "test2",
    cast: ["test3", "test4"],
  },
];

const stars = input.reduce((acc: string[], value) => {
  value.cast.forEach((star) => {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });
  return acc;
}, []);

//result ["test1",'test2','test3','test4']

// Composing functions with reduce

function increment(input: number) {
  return input + 2;
}
function decrement(input: number) {
  return input - 1;
}
function double(input: number) {
  return input * 2;
}

// let'use a functional composition
const pipeline = [increment, decrement, double];

const final_value = pipeline.reduce((acc, value) => {
  return value(acc);
}, 1);

// result 4
console.log(final_value);
