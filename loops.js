// List of favourite foods
const foods = ["pizza", "pasta", "roasted steak", "sausages", "fried chicken"];

//for...of loop.
for(const food of foods) {
  console.log(`my favourite foos is ${food}`);
}

//for loop: 1 - 10
for(let i = 1; i <= 10; i++) {
  console.log("Number", i);
}

// sum of numbers in an array.
function sum(numbers) {
  let total = 0;
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}

console.log(sum([4, 8, 15]));

