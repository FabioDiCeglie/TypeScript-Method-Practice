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

// --------------- object-oriented programming (OOP)

var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

/// we can say that the Functional Programming paradigm works by keeping the data and functionality separate.
/// It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

/// ------------------ OOP

var purchase = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log(calculation);
  },
};

purchase.totalPrice(); //120

// using classes in JavaScript

class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// Inheritance in JavaScript

const bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log(penguin1.canFly); // false
console.log(penguin1.hasWings); // true

// Default Parameters

function withDefaultParams(number = 10) {
  console.log("Result:", number * number);
}

// Object.keys() method

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// Object.values() method

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries() method

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4));

// [ ['speed', 400], ['color', 'magenta'] ]

// For of

const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}

// Now loop over any object's own property keys and values.

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (var key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

// how to access an object's member using the brackets notation.

function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

// for-in and for-of

const car = {
  engine: true,
};
const sportsCar = Object.create(car);
sportsCar.speed = "fast";

// for in iterate over the properties of the object and its prototype
// @ts-ignore
for (prop in sportsCar) {
  // @ts-ignore
  console.log(prop); // speed engine
}

// for of iterate over only for the objects properties
// @ts-ignore
for (prop of sportsCar) {
  // @ts-ignore
  console.log(prop + ": " + sportsCar[prop]); // speed : fast
}

// Challenge JavaScript

// Task 1: Code a Person class
class Person {
  name: string;
  age: number;
  energy: number;
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    return (this.energy += 10);
  }
  doSomethingFun() {
    return (this.energy -= 10);
  }
}

// Task 2: Code a Worker classc
class Work extends Person {
  xp: number;
  hourlyWage: number;
  constructor(xp = 0, hourlyWage = 10, name = "Alice", age = 30, energy = 120) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  gotToWork() {
    return (this.xp += 10);
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  let work = new Work(0, 10, "Bob", 21, 110);
  work.gotToWork();
  return work;
}
console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
  let work = new Work(100, 30, "Alice", 30, 120);
  work.doSomethingFun();
  return work;
}
