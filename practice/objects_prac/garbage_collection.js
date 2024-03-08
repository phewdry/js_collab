"use strict"

// Exercise 1: Understanding References
// Question: Given an object parent with a property child that references another object, describe how you would "disconnect" parent from its child to ensure garbage collection of child.

let parent = {
    child: {
        name: "Child"
    }
};
let parent2 = {
    child: {
        name: parent
    }
};


let cpy = { ...parent }
// Disconnect 'parent' from 'child' here

let deepCopy = JSON.parse(JSON.stringify(parent));

if (deepCopy === parent) {
    console.log(`true`);
} else {
    console.log(`false`);
}


if (deepCopy.child === parent.child) {
    console.log(`true`);
} else {
    console.log(`false`);
}

if (parent.child === parent['child']) {
    console.log(`true`);
} else {
    console.log(`false`);
}

parent.child = NaN;
parent.child = null; // point child to null

console.log(`${JSON.stringify(parent2)}`);
console.log(JSON.stringify(parent2));


// Exercise 2: Circular References and Garbage Collection
// Question: Explain how circular references might prevent garbage collection and illustrate with an example. Then, demonstrate how to break the circular reference.

function createCircularReference() {
    let objectA = { referenceToB: null };
    let objectB = { referenceToA: objectA };
    objectA.referenceToB = objectB;
    // Break the circular reference here
    objectB.referenceToA = null;
}

// Exercise 1: Identifying Unreachable Objects
// Question: Consider the following code snippet. Identify which objects become eligible for garbage collection once the function processData completes execution. Explain your reasoning.


function processData() {
    let o1 = { a: 1 }
    let o2 = { b: o1 }
    let o3 = o2
    
    o2.b=null
    o2=null
    o1=null
}

processData();



// In the `processData` function provided:

// 1. `o1` is an object with a property `a`.
// 2. `o2` is an object with a property `b` which references `o1`.
// 3. `o3` is assigned the value of `o2`, so it also references the same object as `o2`.
// 4. `o2.b` is set to `null`, which means the property `b` of `o2` no longer holds a reference to `o1`. However, `o3` still holds a reference to the original object.
// 5. `o2` itself is then set to `null`, so it no longer holds a reference to any object.
// 6. Finally, `o1` is set to `null`, so it no longer holds a reference to any object.

// After the execution of `processData`:

// - `o1` is `null`, it doesn't hold a reference to any object.
// - `o2` is `null`, it doesn't hold a reference to any object.
// - `o3` still holds a reference to the object `{ b: null }`.

// So, after all these operations, `o3` still holds a reference to the original object, but that object's `b` property is now set to `null`.



function deepCopy(obj) {
    
}

let originalObject = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

let deepCopy = deepCopy(originalObject);
