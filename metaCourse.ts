// Object literals and the brackets notation exercises

var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
// 100 200 red

// ------------- Defensive programming

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function");
  }
}
letterFinder([], []);
letterFinder("cat", "c");

// ----------- functional programming

const currencyOne = 100;
let currencyTwo = 0;
const exchangeRate = 1.2;

function convertCurrency(amount: number, rate: number) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

// ------ function calling and recursion

let counter = 3;

function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}

// Recursion is an alternative way to run repetitive code
// without the use of loops
