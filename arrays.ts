// Basics: Use concat to add values to an Array

const items: number[] = [1, 2, 3, 4, 5, 6];

const newItems: number[] = items.concat(7);

const anotherExample: number[] = items.concat([1, 2], [4, 5]);

const people = [
  {
    name: "Shane",
  },
  {
    name: "Aida",
  },
];
const people2 = [
  {
    name: "Shane",
  },
  {
    name: "Aida",
  },
];

const ex = people.concat(people2).forEach((person) => {
  console.log(person.name);
});
