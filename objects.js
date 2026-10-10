//An object with a method
const book = {
  name: "A Guide to Web and Web development",
  author: "Ray Rayz",
  pages: 254,
  describe() {
    return `${this.name} by ${this.author}`;
  },
};

console.log(book.name);
console.log(book["author"]);
console.log(book.pages);
console.log(book.describe());

// for...of loop over an array of objects.
const books = [
  {name: "code", author: "Charles Petzold"},
  {name: "Computer Architecture", author: "Andrew Tannenbaum"},
  {name: "The Art of Disassembly", author: "Chris Kasperski"},
];

for (const b of books) {
  console.log(`${b.name} by ${b.author}`);
}

//loop + function.
function isAdult(age) {
  return age >= 18;
};
  
const people = [
  {name: "Amina", age: 30},
  {name: "Brian", age: 17},
  {name: "Chloe", age: 22},
];

for (const p of people) {
  if (isAdult(p.age)) {
    console.log(`${p.name} is an adult`);
  } else {
    console.log(`${p.name} is not an adult`);
  }
}
