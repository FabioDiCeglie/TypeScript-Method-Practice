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
