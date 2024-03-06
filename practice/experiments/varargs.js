"use strict"

const str1 = 'Hello';
const str2 = 'World';
const result = `${str1} ${str2}`;
console.log(result); // Output: Hello World


// function logMe( color='magenta', str1, var2 ) {
// if str, just append, else convert to str and append 

function foo(color = "magenta", ...rest) {
    // console.log('a:', a);
    // console.log('b:', b);
    console.log('rest:', rest);

    // rest.join()
}



foo(1, 2, 3, 4, 5);

// Output:
// a: 1
// b: 2
// rest: [3, 4, 5]



function greet(greeting, ...names) {
    return `${greeting}, ${names.join(', ')}`;
}
function greetMe(greeting, ...names) {

    let retStr = ""
    names.forEach((item, ind )=> {
        retStr += `${item}`+" "
    })
    console.log(retStr)
    // return `${greeting}, ${names.join(', ')}`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));

console.log(greetMe(44, 'Alice', 'Bob', 'Charlie'));

// Output: Hello, Alice, Bob, Charlie
