// A promise
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//async/await: write waiting code that reads top to bottom
async function slowHello() {
  console.log("waiting...");
  await wait(1000);
  console.log("Hello after 1 second")
}

//Fetch: get real data from the internet
async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return user;
}

async function main() {
  await slowHello();
  
  for (const id of [1, 2, 3, 4]) {
    const user = await getUser(id);
    console.log(`User ${id}: ${user.name}`);
}
  
  const first = await getUser(1);
  console.log(first.address.city);
  console.log(first.company.name);
  console.log(first.address.geo.lat);
  console.log(`User: ${first.name} ${first.email}`);
}

main();
