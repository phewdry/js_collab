"use strict"

console.log("-".repeat(20)); // Prints 20 hyphens

// Exercise 1: Cloning a Function in an Object
// Question: Objects can contain functions. Write a code snippet to clone an object user that includes a method greet. Ensure your clone is a deep copy and includes copying the function, so it works just like the original object's method.

let user = {
    name: "John",
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
// Clone 'user' including the 'greet' method

function F1() {
    console.log(`IN F1`);
    // console.trace();
}
{ // PRACTICE 
    // The built-in eval function allows to execute a string of code.
    let result = eval('console.log(`asd`);');

    // > F1.toString()
    // 'function F1() {\n    console.log(`IN F1`);\n    // console.trace();\n}'
    // > 

    user.greet2 = eval('console.log(`Hello, my name is ${this.name}!`);');
    user.greet();

    // > '('+F1.toString()+')'
    // '(function F1() {\n    console.log(`IN F1`);\n    // console.trace();\n})'

}


// Create a new function with the same body as the original function
const copiedFunction = eval('(' + F1.toString() + ')');

console.log(` ${copiedFunction.toString()} `);
console.log(copiedFunction.toString());

console.log("-".repeat(20)); // Prints 20 hyphens

{ // PRACTICE 
    // Original function with additional properties
    function originalFunction() {
        console.log('Original function');
    }
    originalFunction.customProperty = 'Custom property';

    // Copy the function
    function deepCopyFunction(originalFunction) {
        const copiedFunction = eval('(' + originalFunction.toString() + ')');

        for (let prop in originalFunction) {
            if (originalFunction.hasOwnProperty(prop)) {
                copiedFunction[prop] = originalFunction[prop];
            }
        }

        return copiedFunction;
    }

    const copiedFunction = deepCopyFunction(originalFunction);

    // Test the copied function and its additional property
    copiedFunction(); // Outputs: "Original function"
    console.log(copiedFunction.customProperty); // Outputs: "Custom property"

    /* 
        In this example:
    
        The originalFunction is defined with an additional property customProperty.
        The deepCopyFunction is used to copy the originalFunction.
        The copied function copiedFunction is invoked and its additional property customProperty is accessed and printed to the console.
        This demonstrates that the copied function retains any additional properties attached to the original function. You can add any custom properties or methods to a function in a similar manner and they will be copied along with the function body.     */

}


// Exercise 2: Merging Objects with Conflicting Keys
// Question: Write a function mergeObjects that takes two objects, obj1 and obj2, and merges them. If there is a conflict (the same key in both objects), the value in obj2 should overwrite the value in obj1. Demonstrate this function with an example.


let obj1 = { name: "Alice", age: 30 };
let obj2 = { age: 25, city: "New York" };
// Implement 'mergeObjects'

function mergeObjects(a, b) {


    let keysA = Object.keys(a).sort();
    let keysB = Object.keys(b).sort();

    // sort key list
    // iter and cmp keyA to keyB


    // for () {
    //     let valA = a[ke]

    // }


}

function builder() {
    if (typeof a === 'function') {
        if (typeof b === 'function') {
            // compare
            if (a.toString() !== b.toString()) {

            }
        }
    }
    let obj3 = Array.isArray(a) ? [] : {}
}

{   // PRACTICE
    // > typeof F1
    // 'function'

    // > typeof [1,2,3]
    // 'object'
    // > typeof {1:1}
    // 'object'    

    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
        return age >= 18;
    }

    let array1 = [1, 2, 3, 4];
    let array2 = [2, 4, 6, 8];
    function arrayIntersection(a1, a2) {
        // check if Arr b has ele

        function sectF(ele) {
            // if you include the curly braces, you need to explicitly use the return keyword to specify the value that should be returned.
            return (ele) => { return a2.includes(ele) }
        }
        let cmpF = (value) => {  a2.includes(value) };
        return a1.filter(cmpF);


    }
    let resArr = arrayIntersection(array1, array2);
    console.log(resArr);


    function intersection(arr1, arr2) {
        return arr1.filter(value => arr2.includes(value));
    }
    // console.log(intersection(array1, array2));
    // console.log(intersection([1, 2, 3], [4, 5]));

    let array1_a = [1, 2, 3, 4];
    let array2_a = [2, 4, 6, 8];
    let result_a = intersection(array1_a, array2_a);
    // console.log(result_a); // Output: [2, 4]

}


console.log("-".repeat(20)); // Prints 20 hyphens
