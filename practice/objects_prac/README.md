
### 1. Objects

**Exercise:** Create an object named `person` that contains the following properties: `name` (a string), `age` (a number), and `greet` (a method that logs `"Hello, my name is [name]!"` to the console).

**Solution:**
```javascript
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name + "!");
  }
};

person.greet(); // Outputs: Hello, my name is John!
```

### 2. Object References and Copying

**Exercise:** Explain what happens when you copy an object using the assignment operator (`=`) and demonstrate how to create a true copy of an object.

**Solution:**
When you copy an object using the assignment operator, you're only copying the reference to the object, not the actual object. This means changes to either the original or the copy affect both.

To create a true copy, you can use the `Object.assign()` method or the spread operator `{...}`.

```javascript
let original = { name: "John", age: 30 };
let copy = Object.assign({}, original);
let spreadCopy = { ...original };

original.name = "Jane"; // Changing the original object's name

console.log(copy.name); // Outputs: John
console.log(spreadCopy.name); // Outputs: John
```

### 3. Garbage Collection

**Exercise:** Briefly explain how garbage collection works in JavaScript and provide an example where garbage collection would be triggered.

**Solution:**
Garbage collection in JavaScript automatically removes objects that are no longer reachable or needed from memory. An object becomes eligible for garbage collection when there are no references pointing to it.

```javascript
function createData() {
  let obj = new Object();
  // more code
}

createData(); // After this function executes, 'obj' is no longer accessible and can be garbage collected.
```

### 4. Object Methods, "this"

**Exercise:** Modify the `person` object's `greet` method to use an arrow function. Explain what happens to the `this` context when using an arrow function inside an object method.

**Solution:**
```javascript
let person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log("Hello, my name is " + this.name + "!"); // 'this' will not refer to the person object
  }
};

person.greet(); // Outputs: Hello, my name is !
```
Using an arrow function changes the context of `this`. Arrow functions do not have their own `this` context; they inherit `this` from the parent scope, which, in the case of object methods, is typically not what you want.

### 5. Constructor, Operator "new"

**Exercise:** Create a constructor function named `Animal` that creates objects with properties `name` and `sound`, and a method `makeSound` that logs the sound to the console. Create an instance of `Animal`.

**Solution:**
```javascript
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function() {
    console.log(this.sound);
  };
}

let dog = new Animal("Dog", "Woof");
dog.makeSound(); // Outputs: Woof
```

### 6. Optional Chaining `?.`

**Exercise:** Given an object `user` that may or may not have the property `address` with a nested property `street`, safely access `street` using optional chaining.

**Solution:**
```javascript
let user = {}; // Sometimes it might have address property
console.log(user.address?.street); // Outputs: undefined safely without throwing an error
```

### 7. Symbol Type

**Exercise:** Create a symbol with the description "id" and use it as a key in an object. Explain why symbols are useful.

**Solution:**
```javascript
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123
};

console.log(user[id]); // Outputs: 123
```
Symbols are useful because they create unique identifiers for object properties. This is particularly handy for adding properties to objects without worrying about property name collisions, as each symbol is unique.

### 8. Object to Primitive Conversion

**Exercise:** Explain how object-to-primitive conversion works and provide an example of manually setting an object's conversion behavior.

**Solution:**
Object-to-primitive conversion happens when an object is used in a context that requires a primitive value (e.g., in mathematical operations, comparisons, or implicitly through string concatenation). Objects can customize their conversion behavior by defining `toString` and/or `valueOf` methods.

```javascript
let user = {
  name: "John",
  money: 1000,
  // for hint "string"
  toString() {
    return `{name: "${this.name}"}`;
  },
  // for hint "number" or "default"
  valueOf() {
    return this.money;
  }
};

console.log(user); // Outputs: {name: "John"} when used in a string context
console.log(+user); // Outputs: 1000 when used in a numeric context
```
