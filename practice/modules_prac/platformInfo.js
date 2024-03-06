// Exercise 6: Conditional Module Export
// Create a module named platformInfo.js that exports different information based on the operating system where the Node.js code is running. Use os.platform() to determine the OS and export relevant information like OS name, version, or file path conventions.

const os = require('os');
// const JSON = require('JSON');

// 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

os_types = ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'];

console.log(`${os.platform()}`);

if (os.platform() === 'linux') {
    console.log(`FOUND1:`);

}
for (let val of os_types) {
    if (os.platform() === val) {
        module.exports = { pltf: os.platform() };
        console.log(`FOUND: ${val}`);
        break;
    }
}

console.log(JSON.stringify(module.exports, null, 2));

// console.log(`${JSON.stringify(module.exports)}`);

// const util = require('util');
// console.log(util.inspect(module.exports, { showHidden: false, depth: null, colors: true }));


// os_types.forEach((val, ind) => {
//     if (os.platform === val) {
//         console.log(`os.platform FOUND: ${os.platform}`);
//         module.exports = { pltf: os.platform };
//         return;
//     }
// });