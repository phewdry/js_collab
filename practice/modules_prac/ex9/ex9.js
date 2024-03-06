// Exercise 9: Exploring Module Caching
// Node.js caches the first time a module is loaded. This means subsequent require() calls return the same instance. Create two modules, cacheTest.js and modA.js. In modA.js, define a variable that increments each time the module is required. In cacheTest.js, require modA.js multiple times and log the variable to demonstrate that the module is cached and not re-evaluated.

"use strict";

const val2 = 10;
module.exports = val2;
// export const val = 10;