// Exercise 8: Asynchronous Module Import
// Node.js traditionally uses synchronous imports with require(). However, you can also dynamically import modules asynchronously using the import() function. Create a module named asyncMath.js that exports a function for calculating the square of a number. In another file, use the dynamic import() syntax to import asyncMath.js and call the exported function.


'use strict';

export function sqF(n) {
    return n**2;
}