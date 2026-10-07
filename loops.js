// An array: a group of list in []
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]) //first item (count starts at 0)
console.log(fruits.length); //how many times

//for loop: repeat while the condition is true
for(let i = 0; i < 3; i++) {
  console.log("Round", i);
}

//for...of loop:go through each item in an array
for (const fruit of fruits) {
console.log(`i like ${fruit}`);
}

//while loop: repeat until the condition becomes false
let count = 3;
while (count > 0) {
  console.log("countdown:", count);
  count--;
}
