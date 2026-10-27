const wait = (ms) => new Promise((resolve) => setTimeout (resolve, ms));

async function slowHello() {
  console.log("loading...");
  await wait (2000);
  console.log("Done!");
}
//feching user data
async function getTodos() {
  try{
    await slowHello()
    const response = await fetch ("https://jsonplaceholder.typicode.com/users/1/todos");

    if(!response.ok) {
      throw new Error(`sever replied with status ${response.status}`);
    }
    
    const todos = await response.json(); 
    console.log(todos[0]);
    console.log(`Total todos: ${todos.length}`);

    let done = 0;
    for (const todo of todos) {
      if (todo.completed) {
        done++;
      } else {
        console.log(`Unfinished: ${todo.title}`);
      }
    }
    console.log(`Completed: ${done} of ${todos.length}`);
  } catch (error) {
    console.log("Request failed:", error.message);
  }
}

getTodos();    
