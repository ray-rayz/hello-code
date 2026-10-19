const wait = (ms) => new Promise((resolve) => setTimeout(resolve , ms));

async function slowHello() {
  console.log("waiting...");
  await wait(1000);
  console.log("Hello, here is the todos sample");
}

async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  for (const todo of todos) {
    console.log(todo.title);
  }
}

async function main() {
  await slowHello();
  await getTodo();
}

main();
