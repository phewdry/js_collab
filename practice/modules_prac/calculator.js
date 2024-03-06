// <!-- Exercise 1: Creating and Exporting a Basic Module
// Create a module named calculator.js that exports four functions: add, subtract, multiply, and divide. Each function should take two parameters and return the result of the arithmetic operation -->


async function add(a, b) {

    return new Promise(
        (res, rej) => {
            setTimeout(() => { res(a + b) }, 1)
        }
    )


}

let obj = {

    firstName: 'John',
    lastName: 'Doe',
    add2(a, b) {
        return a + b;
    },
    min2(a, b) {
        return a - b;
    }
}

// Each file in Node.js is treated as a separate module

// module.exports = add;
// You can have only one default export per module.
// give flexibility in naming when importing.


module.exports = {
    add2: obj.add2,
    min2: obj.min2

}

// const { function1, function2, function3 } = require("./lib/file.js")

// To export multiple functions you can just list them like this:

// module.exports = {
//    function1,
//    function2,
//    function3
// }
// And then to access them in another file:

// var myFunctions = require("./lib/file.js")
// And then you can call each function by calling:

// myFunctions.function1
// myFunctions.function2
// myFunctions.function3



