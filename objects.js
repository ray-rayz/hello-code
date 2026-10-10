//An object: named propreties inside curly braces
const person = {
  name: "Ray",
  age: 26,
  skills: ["JavaScript", "Git"],
};

console.log(person.name);  // dot notation
console.log(person["age"]);  //bracket notation
console.log(person.skills[0]);  // an array inside an object

// change and add proprties
person.age = 27;
person.city = "Nairobi";
console.log(person);

// A function inside an object is called a method
const dog = {
  name: "Rex",
  bark() {
    return `${this.name} says woof!`;
  },
};
console.log(dog.bark());

//An array of objects, looped over
const people = [
  {name: "Amina", age: 30},
  {name: "Brian", age: 17},
  {name: "Chloe", age: 22},
];

for (const p of people) {
  console.log(`${p.name} is ${p.age}`);
}
