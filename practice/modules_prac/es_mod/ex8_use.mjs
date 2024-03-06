// Exercise 8: Asynchronous Module Import
// Node.js traditionally uses synchronous imports with require(). However, you can also dynamically import modules asynchronously using the import() function. Create a module named asyncMath.js that exports a function for calculating the square of a number. In another file, use the dynamic import() syntax to import asyncMath.js and call the exported function.



// Differences from CommonJS:

// ES6 modules are statically analyzed, which means imports are resolved at compile-time.
// Imports are live bindings, meaning they are read-only views into the exports of the imported module.
// Circular dependencies are handled differently in ES6 modules compared to CommonJS.
// Benefits:

// ES6 modules provide a more standardized module system across JavaScript environments (Node.js and browsers).
// They offer improved syntax and features compared to CommonJS.
// ES6 modules support tree-shaking, allowing bundlers to eliminate unused exports during the build process, resulting in smaller bundle sizes.


'use strict';



// MUST HAVE .mjs extension for ES6 modules in node


import { sqF } from "./ex8.mjs"

console.log(sqF(10));   
