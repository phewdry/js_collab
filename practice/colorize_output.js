const colors = {
    'reset': '\x1b[0m',
    'bright': '\x1b[1m',
    'dim': '\x1b[2m',
    'underscore': '\x1b[4m',
    'blink': '\x1b[5m',
    'reverse': '\x1b[7m',
    'hidden': '\x1b[8m',
    'black': '\x1b[30m',
    'red': '\x1b[31m',
    'green': '\x1b[32m',
    'yellow': '\x1b[33m',
    'blue': '\x1b[34m',
    'magenta': '\x1b[35m',
    'cyan': '\x1b[36m',
    'white': '\x1b[37m',
    'bgBlack': '\x1b[40m',
    'bgRed': '\x1b[41m',
    'bgGreen': '\x1b[42m',
    'bgYellow': '\x1b[43m',
    'bgBlue': '\x1b[44m',
    'bgMagenta': '\x1b[45m',
    'bgCyan': '\x1b[46m',
    'bgWhite': '\x1b[47m'
};

// Function to print text with color
// function logMe(text, color='magenta') {


//     // Check if the specified color exists
//     if (colors[color]) {
//         console.log(`${colors[color]}${text}${colors['reset']}`);
//     } else {
//         console.log(text); // Print without color if the specified color is invalid
//     }
// }


// function logMe2(color='magenta', ...items) {

//     let retStr = ""
//     items.forEach((item, ind )=> {
//         retStr += `${item}`+" "
//     })
//     // console.log(retStr)


//     // Check if the specified color exists
//     if (colors[color]) {
//         console.log(`${colors[color]}${retStr}${colors['reset']}`);
//     } else {
//         console.log(retStr); // Print without color if the specified color is invalid
//     }
// }

/**
 * Logs a colored message to the console.
 *
 * @param {...string} items - The items to log.
 * @param {string} [color='magenta'] - The color to use. Must be a key in the `colors` object.
 */
function logMe(...items) {
    const color = items.length > 0 && colors[items[items.length - 1]] ? items.pop() : 'magenta';
    const retStr = items.join(' ');

    // Check if the specified color exists
    if (colors[color]) {
        console.log(`${colors[color]}${retStr}${colors['reset']}`);
    } else {
        console.log(retStr); // Print without color if the specified color is invalid
    }
}


// Example usage
// logMe('Hello, World!');
// logMe('Hello, World!', 'yellow');
// logMe('Hello, World!', 'blue');
// logMe('Hello, World!', 'magenta');
// logMe('Hello, World!', 'cyan');
// logMe('Hello, World!', 'bgBlack');
// logMe('Hello, World!', 'bgRed');
// logMe('Hello, World!', 'bgGreen');
// logMe('Hello, World!', 'bgYellow');
// logMe('This is in red color!', 'red');

// logMe2('Hello, World!');

logMe('Hello, World!'); // Logs 'Hello, World!' in magenta
logMe('Hello, World!', 'blue'); // Logs 'Hello, World!' in blue


module.exports = logMe;