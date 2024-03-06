const { addF } = require('./add')
const { multF } = require('./mult')
const { hst, port } = require('./config')

// . If such a file exists, Node.js will load it as a module.

// Execute the Module Code: Node.js will execute the code within the "mult.js" file. This code may include variable declarations, function definitions, or other statements.


console.log(`${port}`);


module.exports = { addF, multF }
