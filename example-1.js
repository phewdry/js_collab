// 1. Methods of Primitives
// Explanation: JavaScript allows primitives (like strings or numbers) to have methods, even though they're not objects. This works through a process called "boxing", where a primitive value is temporarily wrapped in an object, allowing access to methods.
// Exercise: Use the String.prototype.toUpperCase method to convert a lowercase string to uppercase without directly calling the method on a string primitive.

console.log(`${String.toString("abc")}`);
let str = "hello";
console.log(`${str.toUpperCase()}`);
console.log(`${String.toString(str)}`);


console.log(`${String("abc")}`);
// let str = "hello";
console.log(`${str.toUpperCase()}`);
console.log(`${String(str)}`);

console.log("-".repeat(20)); // Prints 20 hyphens


// 2. Numbers
// Explanation: JavaScript has a single number type for both integers and floating-point numbers. There are methods and properties for dealing with precision, rounding, and other numerical operations.

// Exercise: Write a function that formats a number to two decimal places, without using toFixed.




let num = 3.14159;


// > num%1
// 0.14158999999999988
// > num-(num%1)
// 3


// >     Math.round(14.159 )
// 14
// >     Math.round(14.59 )
// 15

function formatNumber(num) {
    // Format num to 2 decimal places
    let intPart = num - (num % 1);
    let decPart = num % 1;
    // Math.round(.49559 )=0
    // Math.round(.59559 )=1
    decPart *= 1000;
    decPart = Math.round(decPart);
    return intPart + (decPart / 1000)

    /* 
    
`   3.14159
    -> .14159
    -> 141.59
    round 
    -> 142
    add 3 + .142
    =3.142
    
    
    */
}

console.log("-".repeat(20)); // Prints 20 hyphens


// 3. Strings
// Explanation: Strings in JavaScript are immutable and have methods to perform operations such as searching, slicing, and manipulating strings.

// Exercise: Write a function that takes a string and returns it in reverse order.

function reverseStr(str) {


    // > i="11"
    // '11'
    // > i[0]
    // '1'
    // > i[2]
    // undefined

    let f1 = () => { console.log(`${str.slice(2, 3)}`); }
    let revS_iter = (str) => {
        newStr = "";

        for (let i = 0; i < str.length; i++) {
            newStr = str[i] + newStr;
        }
        console.log(`${newStr}`);
        return newStr;
    }

    // f1()

}

reverseStr("abc")


console.log("-".repeat(20)); // Prints 20 hyphens divider


// 4. Arrays
// Explanation: Arrays in JavaScript can contain items of different types and have methods to manipulate the array's contents, like adding, removing, or finding items.


// Here's the syntax of the filter() method:

// const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
// callback: A function to test each element of the array. It should return true to keep the element, or false otherwise. It accepts three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter() was called upon.
// thisArg (optional): An object to use as this when executing the callback function.

// Exercise: Implement a function that removes all occurrences of a specific value from an array.

function remArr(numbers) {
    const getOdds = (numbers) => {
        const oddNumbers = numbers.filter(number => number % 2 !== 0);

        return numbers.filter(number => number % 2 !== 0);
        // return arr.filter((ele) => { ele % 2 !== 0 })
    }
    return getOdds(numbers);
}
console.log(remArr([1, 2, 3]))


function remEle(arr, exclude) {

    const removed = arr.filter(ele => ele !== exclude);
    console.log(removed);
}

remEle([1, 2, 3], 1);

const numbers = [1, 2, 3, 4, 5, 6];

const small = numbers.filter(ele => ele < 5);
console.log(`${small}`);
console.log(`${Object.toString(small)}`);
console.log(Object.toString(small));
console.log(JSON.stringify(small));


// console.log(`${Arrays.toString(small)}`);
console.log("-".repeat(20)); // Prints 20 hyphens divider

{

    // 6. Iterables
    // Explanation: In JavaScript, an object is iterable if it implements the iterable protocol, meaning it has a Symbol.iterator property.

    // Exercise: Create a custom iterable object that iterates over Fibonacci numbers.

    // javascript
    // Copy code

    // let fibonacci = {
    //     // Implement iterable protocol for Fibonacci numbers
    //     data[]
    // };

    // Define a custom iterable object
    const myIterable = {
        data: ['a', 'b', 'c'],
        [Symbol.iterator]() {
            let index = 0;
            return {
                next: () => {
                    if (index < this.data.length) {
                        return { value: this.data[index++], done: false };
                    } else {
                        return { value: undefined, done: true };
                    }
                }
            };
        }
    };

    // Use a for...of loop to iterate over the elements
    for (const item of myIterable) {
        console.log(item);
    }



    function fib(num) {
        if (num >= 0 && num < 2) {
            return num;
        }
        return fib(num - 1) + fib(num - 2);
        // let a = "123";
        // return fib();
    }

    const myFib = {
        [Symbol.iterator]() {
            let a = 0, b = 1;
            return {
                next: () => {

                    let nxt = a + b;
                    a = b;
                    b = nxt;
                    return { value: nxt, done: false };
                } // 0 1 2 3 5 
            }
        }
    }

    for (const i of myFib) {
        console.log(i)
        if (i > 100) {
            break;
        }
    }

    console.log("-".repeat(20)); // Prints 20 hyphens divider


    function isPrime(num) {
        // To check whether a given number N is prime or not, We have to check if number is divisible by any number from 2 to N-1. If it is not divided by any number then it is a prime number else it is not a prime number.S
        for (let tst = 2; tst < num; tst++) {
            if (num % tst === 0) {
                return false;
            }
        }
        return num > 1;
    }


    const pIter = {
        [Symbol.iterator]() {
            let strt = 2;
            return {
                // next: () => {
                //     // In your pIter object, the next method only returns an object when isPrime(strt) is true. If isPrime(strt) is false, the next method doesn't return anything, which is equivalent to returning undefined.


                //     if (isPrime(strt)) { return { value: strt, done: false } }
                //     strt++;
                // }
                next: () => {

                    while (!isPrime(strt)) {
                        strt++;
                    }
                    let value = strt;
                    strt++;
                    return { value: value, done: false }
                }
            }
        }
    }

    for (const i of pIter) {
        if (i < 20) {
            console.log(`${i}`);
        } else {
            break;
        }
    }


    // Using a for...of loop to iterate over Fibonacci numbers
    // for (const fib of fibonacciIterable) {
    //     if (fib > 1000) break; // Break the loop when Fibonacci number exceeds 1000
    //     console.log(fib);
    //   }
    //   In this example:

    //   fibonacciIterable is an object with a Symbol.iterator method that returns an iterator object.
    //   The iterator object's next() method generates the next Fibonacci number in the sequence and updates the internal state (a and b) accordingly.
    //   The loop iterates over Fibonacci numbers using a for...of loop, terminating when the Fibonacci number exceeds 1000.



    console.log("-".repeat(20)); // Prints 20 hyphens divider
}
{
    // 7. Map and Set
    // Explanation: Map and Set are collections introduced in ES6. Map is a collection of keyed data items, unlike objects. Set is a collection of unique values.

    // Exercise: Use Map to count the frequency of words in a sentence.


    function wordFrequency(sentence) {

        let myMap = new Map();

        //     > 'split'.split("")
        // [ 's', 'p', 'l', 'i', 't' ]
        sArr = sentence.split("")
        sArr.forEach((ele) => {
            if (!myMap.has(ele)) {
                // myMap[ele] = 0
                myMap.set(ele, 0)
            }
            else {
                // myMap[ele]++;
                myMap.set(ele, myMap.get(ele) + 1)
            }
        })

        console.log((myMap))
        // JSON.stringify([...myMap])
        console.log((JSON.stringify([...myMap])))
        console.log(JSON.stringify(myMap))

        // Count word frequency
        // Adding key-value pairs to the Map
        // myMap.set('name', 'John');
        // myMap.set('age', 30);
        // myMap.set('city', 'New York');
        return myMap;
    }


    // let str = "John Doe (30 years) and Jane Doe (28 years)";

    // // Using match() with a capturing group
    // let matches = str.match(/\((\d+) years\)/g); // Matches the age in parentheses
    // console.log(matches); // Output: ["(30 years)", "(28 years)"]

    // let str = "The quick brown fox jumps over the lazy dog.";

    // // Using match() with a regular expression
    // let matches = str.match(/o/g); // Searches for all occurrences of the letter 'o'
    // console.log(matches); // Output: ["o", "o", "o", "o"]



    function wordFrequencyBetter(sentence) {
        //remove puncation
        //  to lower case 

        let myMap = new Map();
        sentence = sentence.toLowerCase();
        let matches = sentence.match(/[a-zA-Z0-9]/g);
        console.log(`${matches}`);
        return;
        // sentence.match()
        // sArr = sentence.split("")
        // sArr = sArr.toLowerCase()
        // sArr = sArr.match([a-zA-Z0-9])


        sArr.forEach((ele) => {
            if (!myMap.has(ele)) {
                // myMap[ele] = 0
                myMap.set(ele, 0)
            }
            else {
                // myMap[ele]++;
                myMap.set(ele, myMap.get(ele) + 1)
            }
        })

        console.log((myMap))
        return myMap;
    }

    wordFrequencyBetter("aab133=p.")

    console.log("-".repeat(20)); // Prints 20 hyphens divider

    // Creating a Map
    let myMap = new Map();

    // Adding key-value pairs to the Map
    myMap.set('name', 'John');
    myMap.set('age', 30);
    myMap.set('city', 'New York');

    // Getting values from the Map
    console.log(myMap.get('name'));  // Output: "John"
    console.log(myMap.get('age'));   // Output: 30

    // Checking if a key exists in the Map
    console.log(myMap.has('city'));  // Output: true
    console.log(myMap.has('job'));   // Output: false

    // Deleting a key-value pair from the Map
    myMap.delete('city');

    // // Iterating over key-value pairs in the Map
    // myMap.forEach(function (value, key) {
    //     console.log(key + ' : ' + value);
    // });

    console.log("-".repeat(20)); // Prints 20 hyphens divider

    wordFrequency("aab");
    console.log("-".repeat(20)); // Prints 20 hyphens divider

    // if (!myMap.has(ele)) 
    // { myMap[ele] = 0 } 
    // else {
    //     myMap[ele]++;
    // }
}


{
    // 8. WeakMap and WeakSet
    // Exercise 2: Demonstrate how a WeakSet can be used to keep track of whether or not objects have been processed.

    function trackProcessed() {
        // randomly process 
        // multiply arr length by Math.random() (which is [0,1) )  , then floor 
        let arr = [[1], [2], [3]];
        let len = arr.length;

        let rnd = Math.floor(Math.random() * len)


        // WeakSet is designed specifically for storing objects, and not for primitive values.

        let wkst = new WeakSet()
        wkst.add(arr[rnd]);
        console.log(`${wkst} is wkst`);


        let retArr = [];

        let item = arr.forEach((ele) => {
            if (wkst.has(ele)) {
                retArr.push(ele);

            }
        })
        console.log(`${retArr} was processed`);

    }

    {
        // Weak References

        // Unlike a regular Set, the references to the objects stored in a WeakSet are weak. This means that if there are no other references to an object stored in a WeakSet, it may be garbage collected.
        // This behavior is useful in scenarios where you want to associate metadata with objects without preventing them from being cleaned up by the garbage collector when they are no longer needed elsewhere in your code.

        //     No Iteration

        // Unlike Set, WeakSet does not have methods to iterate over its elements or to retrieve individual elements.
        // This is because the references to the objects stored in a WeakSet are not strong enough to reliably iterate over them.
    }


    console.log("-".repeat(20)); // Prints 20 hyphens divider

    let weakSet = new WeakSet();
    let obj1 = { name: 'John' };
    let obj2 = { name: 'Jane' };

    weakSet.add(obj1);
    weakSet.add(obj2);

    console.log(weakSet.has(obj1));  // Output: true
    console.log(weakSet.has(obj2));  // Output: true

    obj1 = null; // Remove the reference to obj1
    console.log(weakSet.has(obj1));  // Output: false (obj1 is garbage collected)

    // Note: Since weakSet does not have a method to iterate or retrieve its elements, there is no built-in way to confirm the contents of the weakSet.

    console.log("-".repeat(20)); // Prints 20 hyphens divider


}



{

    // # A `WeakMap` is another data structure introduced in ECMAScript 6 (ES6) that is similar to `Map`, but with some differences in behavior. 


    // Exercise 3: Implementing Private Class Fields
    // Objective: Simulate private fields in a class using WeakMap to ensure that certain data is not accessible outside the class methods.

    // Task:

    // Define a class where instances have a private field (e.g., #privateField).
    // Use a WeakMap to store the value of private fields.
    // Provide methods within the class to access and modify the private field.
    // Demonstrate that the field is not accessible outside the class methods.


    //     let weakMap = new WeakMap();
    // let obj1 = {};
    // let obj2 = {};

    // weakMap.set(obj1, 'metadata for obj1');
    // weakMap.set(obj2, 'metadata for obj2');

    // console.log(weakMap.get(obj1));  // Output: "metadata for obj1"
    // console.log(weakMap.get(obj2));  // Output: "metadata for obj2"

    // obj1 = null; // Remove the reference to obj1
    // console.log(weakMap.get(obj1));  // Output: undefined (obj1 is garbage collected)


    {

        //  NOT WORKING 
        
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
                this.internal = new WeakMap();
                this.intKeys = [];
            }

            ex() {
                let m1 = new Map();
                m1.set(this, "this_val");
                console.log(`${m1.get(this)}`)
            }


            greet() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
            getPriv(key) {
                if (this.internal.has(key)) {
                    return this.internal.get(key);
                }
            }
            //  key is an obj, must store str repr
            setPriv(key, val) {
                let index = this.intKeys.findIndex(ele => ele === key);
                if (index !== -1) {
                    console.log(`The array contains the element ${key} at index ${index}.`);
                    this.internal.set(key, val);
                } else {
                    console.log(`The array does not contain the element ${key}.`);
                    this.intKeys.push(JSON.stringify(key));
                    this.internal.set(key, val);
                }
            }
            strPriv() {
                this.intKeys.forEach((key) => {
                    let value = this.internal.get(key);
                    console.log(`Key: ${JSON.stringify(key)}, Value: ${JSON.stringify(value)}`);
                });
            }

        }

        {
            let p1 = new Person("abc", 123);

            let wkMp = new WeakMap();
            wkMp.set(p1, { 1: [1] });
            // console.log(JSON.stringify(wkMp));

            // Iterating over the key-value pairs using forEach
            let keys = [];
            // let wkMp = new WeakMap();

            // let p1 = new Person("abc", 123);
            // wkMp.set(p1, { 1: [1] });
            keys.push(p1);

            keys.forEach((key) => {
                let value = wkMp.get(key);
                console.log(`Key: ${JSON.stringify(key)}, Value: ${JSON.stringify(value)}`);
            });

            {
                // get and update this private field 


                let p2 = new Person("abc", 123);
                let value = wkMp.get(p2);

                let b = (p1 === p2);
                console.log(`${b}`);

                if (!wkMp.get(p2)) {
                    console.log(`entry DNE`);
                }



                console.log("-".repeat(20)); // Prints 20 hyphens divider
                p1.setPriv([1], [1]);
                p1.strPriv();
                p1.ex();
                // p2.setPriv(2,{1:1});

            }
        }
    }
}

console.log("-".repeat(20)); // Prints 20 hyphens divider
