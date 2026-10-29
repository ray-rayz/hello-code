const wait = (ms) => new Promise((resolve) => setTimeout (resolve, ms));
async function slowHello() {
  console.log("loading...");
  await wait (3000);
  console.log("success!");
}

const contacts = [
  {name: "Sarah Njambi", phone: "+254700030795", city: "Nairobi"},
  {name: "Loraine Otieno", phone: "+254703576891", city: "Kisumu"},
  {name: "Easther Ryan's",phone: "+254701487692", city: "Nairobi"},
  {name: "Muriel Adongo", phone: "+254706941994", city: "Kisumu"},
];

function addContact(contacts, contact) {
  contacts.push(contact);
}  

function findByName(contacts, name) {
  for (const c of contacts) {
    if (c.name === name) {
    return c;
    }
  }
  return null;
}

function listByCity(contacts, city) {
  for (const c of contacts) {
    if (c.city === city) {
      console.log(`${c.name}, ${c.phone}, resides in ${c.city}`);
    }
  }
}

addContact(contacts, { name: "Angela Shakim", phone: "+254792093110", city: "Nairobi"});
console.log(contacts.length);
console.log(findByName(contacts, "Loraine Otieno"));
console.log(findByName(contacts, "Nobody"));
listByCity(contacts, "Nairobi");

