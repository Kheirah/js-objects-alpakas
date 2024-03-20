# JS Objects

Organize complex information

## Learning Goals

- Objects Declaration
- Access Objects - Dot Notation
- Access Objects - Bracket Notation
- Nesting of Objects
- Every Object is a Reference Type
- Comparison of Value and Reference Types
- Add or Remove Properties

## Detailed Topics of the Lesson

### Objects Declaration

An object is a collection of properties. Objects in JavaScript can be compared to objects in real life.

```js
const person = {
  name: "John",
  age: 30,
  job: "developer",
};
```

Above you see an object with three properties.

The properties `name` and `job` are of type `string` and the property `age` is of type number.

`name` is called property name or property key and `'John'` is called property value.

See:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
- https://www.json.org/json-en.html

### Access Objects - Dot Notation

In JavaScript, the dot notation is a way to access the properties of an object. It involves using the name of the object, followed by a period (dot), followed by the name of the property you want to access.

For example, consider the following object:

```js
const person = {
  name: "John",
  age: 30,
  job: "developer",
};
```

To access the name property of the person object, you would use the dot notation like this:

```js
console.log(person.name); // Output: 'John'
```

You can also use the dot notation to set the value of an object's property. For example:

```js
person.age = 31;
console.log(person.age); // Output: 31
```

The dot notation is a convenient and commonly used way to access and manipulate the properties of objects in JavaScript.

### Access Objects - Bracket Notation

In JavaScript, the bracket notation is another way to access the properties of an object. It involves using the name of the object, followed by square brackets `[]`, and then a string or expression inside the brackets that represents the name of the property you want to access.

For example, consider the following object:

```js
const person = {
  name: "John",
  age: 30,
  job: "developer",
};
```

To access the name property of the person object using the bracket notation, you would do the following:

```js
console.log(person["name"]); // Output: 'John'
```

You can also use the bracket notation to set the value of an object's property, like this:

```js
person["age"] = 31;
console.log(person["age"]); // Output: 31
```

One advantage of the bracket notation is that it allows you to use variables to access object properties. For example:

```js
const prop = "name";
console.log(person[prop]); // Output: 'John'
```

This can be useful in situations where the name of the property is not known until runtime.

When the properties key is a number, includes a symbol or is two words with a space, you need the bracket notation.

Overall, the bracket notation is a useful tool for accessing and manipulating the properties of objects in JavaScript. It is often used in conjunction with the dot notation, depending on the specific needs of the code.

### Nesting of Objects

In JavaScript, objects can be nested inside other objects. This allows you to create complex data structures and organize related data in a hierarchical manner.

Here is an example of an object that contains nested objects:

```js
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: 10001,
  },
};
```

In this example, the `person` object has a nested object called `address`, which contains further properties such as `street`, `city`, `state`, and `zipCode`.

To access the properties of a nested object, you can use dot notation or bracket notation. For example, to access the `city` property of the `address` object, you can use either of the following:

```js
console.log(person.address.city); // Outputs: "New York"
console.log(person["address"]["city"]); // Outputs: "New York"
```

You can also nest objects inside arrays, like this:

```js
const addresses = [
  {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: 10001,
  },
  {
    street: "456 Maple Avenue",
    city: "Chicago",
    state: "IL",
    zipCode: 60601,
  },
];
```

In this example, the `addresses` array contains two objects, each representing an address. To access the properties of a nested object in an array, you can use bracket notation to access the object, followed by dot notation or bracket notation to access its properties. For example:

```js
console.log(addresses[0].city); // Outputs: "New York"
console.log(addresses[1]["city"]); // Outputs: "Chicago"
```

Nested objects and arrays can be useful for organizing and representing complex data structures in JavaScript. However, it is important to carefully consider the structure and organization of your data to ensure that it is easy to work with and maintain.

### Every Object is a Reference Type

There are two different kinds of data types in JavaScript:

- value types (or primitive types) and
- reference types

Important is that the comparison of value types and reference types are different.

- You can compare two numbers (value type) like: `a === b`, `a !== b`.
- You cannot compare objects (reference type) like this!

### Comparison of Value and Reference Types

Comparison of value types:

```js
23 === 23; // -> true
23 === 42; // -> false
```

Comparison of reference types:

```js
const person1 =  {
    name: 'John',
    age: 30,
    job: 'developer',
};

const person2 =  {
    name: 'John',
    age: 30,
    job: 'developer',
};

person1 === person2; // -> false

{} === {}; // -> false

const person3 = person1
person3 === person1; // -> true
```

`person1` and `person2` look the same, but they are two different objects stored in different places in memory.

Even empty objects (`{}`) are not equal!

The line `const person3 = person1` assigns the memory reference of `person1` to `person3`, so if you compare these references, they are equal.

If you change a property value of `person3`, you will also change `person1`, because that are just references.

```js
console.log(person1.name); // -> John
console.log(person3.name); // -> John
person3.name = "Jane";
console.log(person1.name); // -> Jane
console.log(person3.name); // -> Jane
```

### Add or Remove Properties

In JavaScript it is possible to add new properties to existing objects using the dot- and bracket-notation.

Using the `delete` statement it is possible to remove existing properties.

```js
const person = {
  name: "John",
  age: 30,
};

// add new property `job` and assign a string value
person.job = "developer";
// add new property `address` and assign an empty object
person.address = {};
// add new property `street` using dor notation
person.address.street = "123 Main Street";
// add new property `city` using bracket notation
person.address["city"] = "New York";

console.log(person);
/*
{
  name: 'John',
  age: 30,
  job: 'developer',
  address: { street: '123 Main Street', city: 'New York' }
}
*/

// delete property `name`
delete person.name;

console.log(person);
/*
{
  age: 30,
  job: 'developer',
  address: { street: '123 Main Street', city: 'New York' }
}
*/
```

### References

- https://www.json.org/json-en.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
