"use strict"


// **Exercise:** Create an object named `person` that contains the following properties: `name` (a string), `age` (a number), and `greet` (a method that logs `"Hello, my name is [name]!"` to the console).

let person = {
    name: `stringName`,
    age: parseInt(100, 2),
    F1: function () {
        console.log(`IN F1`);
        // console.trace();
    },
    F2: function () {
        console.log(`IN F1`);
        // console.trace();
    },
    F3: function () {
        console.log(`IN F1`);
        // console.trace();
    },
}

console.log(`${person}`);
console.log(`${JSON.stringify(person)}`);

person.F1();



// > o={a:1}
// { a: 1 }
// > o.toString()
// '[object Object]'
// > JSON.stringify(o)
// '{"a":1}'
// > function x() {
// ... }
// undefined
// > o={a:1, F1:x}
// { a: 1, F1: [Function: x] }
// > JSON.stringify(o)
// '{"a":1}'

// Using string repetition
console.log("-".repeat(20)); // Prints 20 hyphens

function funcsToStr(obj) {
    let str = ""
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            // console.log(`(${obj[key].toString()})`);
            str += `(${obj[key].toString()})`;
            // } else {
            //     str += `(${obj[key].toString()})`;
            // }
        }
    }
    return str;
}
console.log(`${funcsToStr(person)}`);
// Using string repetition
console.log("-".repeat(20)); // Prints 20 hyphens

// ### 2. Object References and Copying

// **Exercise:** Explain what happens when you copy an object using the assignment operator (`=`) and demonstrate how to create a true copy of an object.


let obj1 = {
    a: 1,
    b: "2",

}

let obj2 = obj1;

obj1['a']++
console.log(`${JSON.stringify(obj1)})`);
console.log(`${JSON.stringify(obj2)}`);

// Using Object.assign()

let obj3 = Object.assign({}, obj2);
obj1['a']++
console.log(`${JSON.stringify(obj1)})`);
console.log(`${JSON.stringify(obj3)}`);


// Using spread syntax (...)
let obj4 = { ...obj1 }
obj1['a']++
console.log(`${JSON.stringify(obj1)})`);
console.log(`${JSON.stringify(obj4)}`);



// Exercise 3: Comparing Objects
// Question: Given two objects obj1 and obj2, write a function compareObjects that returns true if the objects are equal (have the same properties and values) and false otherwise. Consider only enumerable properties and not prototypes or symbol properties.

function cmp(a, b) {

    if (JSON.stringify(a).length !== JSON.stringify(b).length) {
        return false;
    }

    function deepCopy(obj) {

    }

    let originalObject = {
        a: 1,
        b: {
            c: 2,
            d: [3, 4]
        }
    };

    let deepCopy2 = deepCopy(originalObject);

    if (funcsToStr(a) !== funcsToStr(b)) {
        return false;
    }
    return true;


}

let ob1 = { name: "Alice", age: 25 };
let ob2 = { name: "Alice", age: 25, a: 2 };

console.log(`${cmp(ob1, ob2)}`);



function deepCmp(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepCmp(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

// > [1]===[1]
// false
// > [1]==
// > {a:1}==={a:1}
// false
// >

// > let a1={1:1};
// undefined
// > a1.toString();
// '[object Object]'
// > Object.toString(a1);
// 'function Object() { [native code] }'

// MUST CHECK EITHER ARRAY OR OBJECT 



console.log(`${deepCmp(ob1, ob2)}`);


console.log("-".repeat(20)); // Prints 20 hyphens


const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const keys = Object.keys(obj);

// Using arrow function
const keysArrow = Object.keys(obj).map(key => key.toUpperCase());

console.log(keys);        // Output: ["name", "age", "city"]
console.log(keysArrow);   // Output: ["NAME", "AGE", "CITY"]



// Using a Recursive Function:
// This method involves recursively copying each nested object and array within the original object.

function myFunction(value, index, array) {
    return value;
}

// function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj
//     }

//     // let a = [keys.map(myFunction)]

//     // keys = obj.keys();
//     let copy;

//     //  if type array copy 
//     if (Array.isArray(obj)) {
//         // works for subarrays too
//         copy = [...obj];
//     }
//     let keys = Object.keys(obj);

//     // > [1,2,3].forEach(key=>{console.log(key)})
//     // curr type is obj
//     if (typeof obj === 'object') {

//         keys.forEach(key => {
//             copy[key] = (deepCopy(obj[key]));
//         });

//     }


//     return copy
//     // if type object recurse

// }

let originalObject = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

// let deepCopyObj = deepCopy(originalObject);
// console.log(`${deepCopyObj}`);


// function deepCopyWorks(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj
//     }

//     // let a = [keys.map(myFunction)]

//     // keys = obj.keys();
//     // let copy={}

//     //  if type array copy 
//     // if (Array.isArray(obj)) {
//     //     // works for subarrays too
//     //     copy= [...obj];
//     // }
//     let copy = Array.isArray(obj) ? [] : {};

//     let keys = Object.keys(obj);

//     keys.forEach(key => {
//         copy[key] = deepCopy(obj[key]);
//         console.log(`${copy[key]}`);
//     });

//     // > [1,2,3].forEach(key=>{console.log(key)})
//     // curr type is obj
//     // if (typeof obj === 'object') {

//     //     keys.forEach(key => {
//     //         copy[key]=(deepCopyWorks(obj[key]));
//     //     });

//     // }


//     return copy
//     // if type object recurse

// }


console.log("-".repeat(20)); // Prints 20 hyphens

function deepCopyWorks(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    let keys = Object.keys(obj);

    // > Object.keys({1:1,2:2}
    //     [ '1', '2' ]
    //     > Object.values({1:1,2:2}
    //     [ 1, 2 ]    
    keys.forEach(key => {
        copy[key] = deepCopyWorks(obj[key]);
        console.log(`${copy[key]}`);

    });

    return copy;
}

let deepCopyObj2 = deepCopyWorks(originalObject);
console.log(`${deepCopyObj2}`);
