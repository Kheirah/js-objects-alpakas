/* Objects */

const person = {
  key: "value",
  name: "Ernst",
  age: 37,
  job: "couch",
  "home-address": "DuckTales",
}; // <-- that is an empty object

console.log(person);

/* What can you do with it? */
console.log(person["job"]); //bracket notation
console.log(person.age); //dot notation
console.log(person["home-address"]); //bracket notation
/* console.log(person.home-address); */ //dot notation does NOT WORK here

let nameOfPerson = "name";

console.log(person[nameOfPerson]);
console.clear();

/* You like objects? You can out objects in objects! */
const customer = {
  key: "value",
  name: "Ernst",
  age: 37,
  job: "couch",
  "home-address": {
    zip: 763543,
    town: "DuckTales",
    street: "Gold Street",
    number: 864,
    apartment: { 1: 1, 2: 2, 3: 3 },
  },
};

console.log(customer["home-address"].apartment[2]);
console.clear();

/* References & Values */
let person1 = { name: "eric" }; //Zwilling 1
let person2 = { name: "eric" }; //Zwilling 2

console.log(person1 === person2); //true or false? => comparing references
console.log(person1.name === person2.name); // comparing values

console.log({ name: "eric" } === { name: "eric" }); //true or false? => comparing references

/* Check by reference */
/* let smartphoneOfEric = { name: "pixel 8" };
let smartphoneOfMax = smartphoneOfEric;
console.clear();
console.log(smartphoneOfEric === smartphoneOfMax); */ //true

let smartphoneOfEric = { name: "pixel 8" };
let smartphoneOfMax = { name: "pixel 8" };

console.clear();
console.log(smartphoneOfEric === smartphoneOfMax); //false

/* Adding / Removing properties */
customer["favorite-color"] = "green";
customer.id_client = 4676;

console.clear();
console.log(customer);

delete customer["favorite-color"];
console.log(customer);
