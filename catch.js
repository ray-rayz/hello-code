async function getTodo() {
  try {
    const response = await fetch("https:/jsonplaceholder.typicode.com//todos");

    if (!response.ok) {
      throw new Error(`server replied with status ${response.status}`);
    }

    const todos = await response.json();
    for (const todo of todos.slice(0, 5)) {
      console.log(todo.title);
    }
  } catch (error) {
    console.log("Request failed;", error.message);
  }
}

getTodo();
