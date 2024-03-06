
// Exercise 4: Directory-based Module
// Create a directory named mathOperations. Inside this directory, create two files: addition.js and multiplication.js. Each file should export a function that performs the respective operation. Then, create an index.js file inside the mathOperations directory that imports these functions and exports them as a module.

let addF = (a, b) => {
    return a + b
}


module.exports = {addF};    
