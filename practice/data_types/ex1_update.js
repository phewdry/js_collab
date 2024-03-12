// Method of Primitives: Convert lowercase string to uppercase without direct call
function toUpperCaseWithoutDirectCall(str) {
    return String.prototype.toUpperCase.call(str);
}

console.log(toUpperCaseWithoutDirectCall("abc")); // ABC
console.log("-".repeat(20));

// Number formatting: Format a number to two decimal places without using toFixed
function formatNumberToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

console.log(formatNumberToTwoDecimals(3.14159)); // 3.14
console.log("-".repeat(20));

// String manipulation: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // olleh
console.log("-".repeat(20));

// Arrays: Remove all occurrences of a specific value
function removeElementFromArray(arr, valueToRemove) {
    return arr.filter(element => element !== valueToRemove);
}

console.log(removeElementFromArray([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
console.log("-".repeat(20));

// Custom iterables: Fibonacci sequence
const fibonacciIterable = {
    [Symbol.iterator]() {
        let [prev, curr] = [0, 1];
        return {
            next() {
                [prev, curr] = [curr, prev + curr];
                return { value: curr, done: false };
            }
        };
    }
};

let count = 0;
for (let num of fibonacciIterable) {
    console.log(num);
    if (++count >= 10) break;
}
console.log("-".repeat(20));

// Prime numbers iterator
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const primeIterable = {
    [Symbol.iterator]() {
        let num = 2;
        return {
            next() {
                while (!isPrime(num)) num++;
                return { value: num++, done: false };
            }
        };
    }
};

let primeCount = 0;
for (let prime of primeIterable) {
    console.log(prime);
    if (++primeCount >= 5) break;
}
console.log("-".repeat(20));

// Word Frequency with Map
function wordFrequency(sentence) {
    const words = sentence.match(/\w+/g) || [];
    const frequencyMap = new Map();

    words.forEach(word => {
        word = word.toLowerCase();
        const frequency = frequencyMap.get(word) || 0;
        frequencyMap.set(word, frequency + 1);
    });

    return frequencyMap;
}

console.log(wordFrequency("Hello world, hello universe."));
console.log("-".repeat(20));

// Simulating Private Class Fields with WeakMap
const privateData = new WeakMap();

class MyClass {
    constructor(name) {
        privateData.set(this, { name });
    }

    getName() {
        return privateData.get(this).name;
    }
}

const instance = new MyClass("My Name");
console.log(instance.getName()); // My Name
console.log(instance.name); // undefined
console.log("-".repeat(20));
