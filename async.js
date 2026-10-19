// A promise
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//async/await: write waiting code that reads top to bottom
async function slowHello() {
  console.log("waiting...");
  await wait(1000);
  console.log("Hello after 1 second")
}

//Fetch: get real data from the internet
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todo");
  const todo = await response.json();
}

console.log(todo);

async function main() {
  await slowHello();
  await getTodo();
}

main();
