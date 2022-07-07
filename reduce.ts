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
