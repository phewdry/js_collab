// Exercise 7: Circular Dependency
// Create two modules, alpha.js and beta.js, that require each other. In alpha.js, export a function that logs "Alpha" and calls a function from beta.js. In beta.js, export a function that logs "Beta" and calls a function from alpha.js. Observe the behavior and think about how Node.js handles circular dependencies.

const logB = require('./beta');

module.exports = function logA() {
    console.log(`ALPHA() CALLED`);
}

logB();
// console.log(`${logB}`);