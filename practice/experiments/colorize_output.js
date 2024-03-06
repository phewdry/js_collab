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
function logMe(text, color='magenta') {


    // Check if the specified color exists
    if (colors[color]) {
        console.log(`${colors[color]}${text}${colors['reset']}`);
    } else {
        console.log(text); // Print without color if the specified color is invalid
    }
}

// Example usage
logMe('Hello, World!');
logMe('Hello, World!', 'yellow');
logMe('Hello, World!', 'blue');
logMe('Hello, World!', 'magenta');
logMe('Hello, World!', 'cyan');
logMe('Hello, World!', 'bgBlack');
logMe('Hello, World!', 'bgRed');
logMe('Hello, World!', 'bgGreen');
logMe('Hello, World!', 'bgYellow');
logMe('This is in red color!', 'red');



// function logMe(str,color='magenta') {
//     console.log(`${colors[color]}${str}${colors['reset']}`);
// }

// logMe('logginge')

module.exports = logMe;