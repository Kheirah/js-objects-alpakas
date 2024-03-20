# JS Objects

## 01 - value type number

```js
const numberA = 30;
let numberB = numberA;

console.log(`numberA: ${numberA} numberB: ${numberB} `);

numberB = 45;
console.log(`numberA: ${numberA} numberB: ${numberB} `);
```

- What output do you expect?

- What is `let numberB = numberA;` doing?

- What is `numberB = 45;` doing?

## 02 - reference type object

```js
const john = {
  name: "John",
  age: 30,
  job: "developer",
};

const jane = john;
jane.name = "Jane";

console.log("john:");
console.log(john);
console.log("jane:");
console.log(jane);
```

- What output do you expect?

- What is `const jane = john;` doing?

- What is `jane.name = 'Jane';` doing?

- How many properties does the object `john` have?

- What is the property name for the value `developer`?

## 03 - dot notation

```js
const golf = {
  color: "red",
  maxSpeed: "180",
};

const opel = {
  color: "blue",
  maxSpeed: "185",
};
```

Print out the colors of these cars, switch the colors and print out the colors again.
