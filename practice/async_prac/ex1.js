"use strict"

// Exercise 1: Basic Async/Await Function
// Objective: Create a simple async function that simulates waiting for data to be fetched and then returns that data.

// Task: Write an async function named simulateDataFetch that uses setTimeout to simulate a network request.
// Output: After a delay, log a message or return a value indicating the data was "fetched".


let simulateDataFetch = async () => {


    return new Promise((res, rej) => {
        let retData = null;
        setTimeout(() => {
            retData = "SUCCESS, DATA RETREIVED";
            res(retData);
        }, 2000)
    })

}

// simulateDataFetch().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(`ERROR,${err.message}`);
// })

let asyncCaller = async () => {
    try {
        let data = await simulateDataFetch();
        console.log(data);
    } catch (err) {
        console.log(`ERROR, ${err.message}`);
    }
}

// asyncCaller();

async function myFunction() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Two seconds have passed");
    // Code to execute after the delay
}

// myFunction();


// Exercise 2: Error Handling with Async/Await
// Objective: Modify the simulateDataFetch function to include error handling using try/catch.

// Task: Introduce a condition that randomly causes the fetch to fail and throws an error.
// Output: Use try/catch to handle errors and log them.

let randInRange = (val) => {
    let noise = Math.random(); //[0,1)

    return Math.floor(noise * val) + 1; // [1, val]
}

let ex2 = async (val) => {
    return new Promise((res, rej) => {
        let randomNumber = randInRange(val);
        if (randomNumber % 2 == 0) {
            setTimeout(() => {
                res("DONE");
            }, 500);
        } else {
            rej("FAILED");
        }
    });
};



ex2(99)
    .then(data => {
        console.log(`${data}`);
    })
    .catch(error => {
        console.error(`${error}`);
    });




//     Exercise 3: Parallel Asynchronous Calls
// Objective: Fetch multiple data sources in parallel and log all results once they're all successfully fetched.

// Task: Simulate fetching data from two different sources in parallel using Promise.all.
// Output: Log all results at once after all data has been "fetched".

async function fetchMultipleDataSources() {

    let p1 = new Promise((res, rej) => {
        setTimeout(() => res("P1 resolved"), 1000)
    });

    let p2 = new Promise(res => {
        setTimeout(() => res("P2 resolved"), 1000)
    });
    let p3 = new Promise(res => {
        setTimeout(() => res("P3 resolved"), 1000)
    });


    let needToProcess = [p1, p2, p3];

    // Promise.all([promise1, promise2, promise3])
    await Promise.all(needToProcess)
        .then((values) => {
            console.log('All promises resolved:', values);
            let [destr1, destr2, destr3] = values;
            console.log('promise1 resolved:', destr1);

        })
        .catch((error) => {
            console.error('At least one promise rejected:', error);
        });
}

fetchMultipleDataSources();


// Exercise 4: Sequential Asynchronous Calls
// Objective: Fetch data sequentially from two sources, where the second fetch depends on the results of the first.

// Task: Simulate two dependent fetch operations, where the second awaits the result of the first.
// Output: Log the result of each fetch operation as it completes.


const myMap = new Map();
myMap.set(100, "Happy");

async function fetchSequentialDataSources() {

    async function op1() {
        return await new Promise(
            (res, rej) => { setTimeout(() => { res(myMap.get(100)) }, 1000) }
        )
    }

    function op2(result) {
        return `op1() returned: ${result} Birthday`;
    }

    let res1 = await op1();

    return op2(res1);
}

fetchSequentialDataSources().then(res => { console.log(res) })


// Exercise 1: Async Timer Function
// Objective: Create an async function that acts as a timer, waiting for a specified duration before continuing execution.


// Implement an async function named waitAndRun that takes a duration in milliseconds and a callback function.
// The function should wait for the specified duration and then execute the callback.

async function waitAndRun(ms, cb) {

    async function timerRun() {
        return await new Promise(res => setTimeout(res("waitAndRun timer done"), 1000))
    }

    let msg = await timerRun();
    console.log(msg);
    console.log("waitAndRun() FINISHED");
}
waitAndRun();




// Exercise: To implement a simplified version of setTimeout from scratch, you can use the setTimeout function to schedule a callback to be executed after a specified delay. 

function mySetTimeout(callback, delay) {
    const startTime = Date.now();

    function checkTime() {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= delay) {
            callback();
        } else {
            setTimeout(checkTime, 10); // Check every 10 milliseconds
        }
    }

    checkTime();
}

// Example usage
console.log('Start');
mySetTimeout(() => {
    console.log('Callback executed after 2000 milliseconds');
}, 2000);




// Exercise 1: Async Timer Function
// Objective: Create an async function that acts as a timer, waiting for a specified duration before continuing execution.

// Task:
// Implement an async function named waitAndRun that takes a duration in milliseconds and a callback function.
// The function should wait for the specified duration and then execute the callback.


function timeout(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
function randTimeout(duration) {
    return new Promise(resolve => setTimeout(resolve, duration * Math.random()));
}
function randTimeoutMin(duration, minDuration = 0) {
    const randomDuration = Math.random() * (duration - minDuration) + minDuration;
    return new Promise(resolve => setTimeout(resolve, randomDuration));
}

// Example usage with a minimum duration:
randTimeout(1000, 500).then(() => console.log("Resolved after a random duration between 500ms and 1000ms"));

function randTimeout2(minDuration, maxDuration) {
    return new Promise((resolve, reject) => {
        if (typeof minDuration !== 'number' || typeof maxDuration !== 'number' || minDuration < 0 || maxDuration < 0 || minDuration > maxDuration) {
            reject(new Error('Invalid duration range'));
        } else {
            const duration = minDuration + Math.random() * (maxDuration - minDuration);
            setTimeout(resolve, duration);
        }
    });
}

async function waitAndRun2(duration, callback) {
    await timeout(duration);
    callback();
}

// Usage example
waitAndRun2(2000, () => console.log('Timer finished!')); // Waits 2 seconds before logging




async function riskyTask(taskId) {
    // > Math.random()
    // 0.9081297780253463

    if (Math.random() > 0.5) {
        throw new Error(`riskyTask(${taskId}) FAILED`);
    }
    return `riskyTask(${taskId}) PASSED`
}


// NOTE
// When you call riskyTask(1) and riskyTask(2) inside a try block without await, the JavaScript engine does not wait for these promises to resolve or reject. Consequently, if riskyTask throws an error asynchronously (i.e., it rejects the promise it returns), this error will not be caught 

// try {
//     riskyTask(1)
//     riskyTask(2)
// } catch (err) {
//     console.error(err.message);
// }

// CORRECT WAY
async function handleRiskyTasks() {
    try {
        await riskyTask(1);
        await riskyTask(2);
        console.log("handleRiskyTasks() SUCCESS");

    } catch (error) {
        console.error(error.message);
    }
}

handleRiskyTasks();


// Exercise 4: Waiting for Multiple Tasks
// Objective: Use Promise.all with async/await to wait for multiple tasks to complete before proceeding.

// Task:
// Implement multiple async functions that complete after varying durations.
// Use Promise.all to wait for all of them to complete before logging a message.


async function taskWithRandomDelay() {

    let p1 = new Promise(res => { randTimeout(5); res("taskWithRandomDelay P1() DONE") })
    let p2 = new Promise(res => { randTimeout(3); res("taskWithRandomDelay P2() DONE") })
    Promise.all([p1, p2]).then(values => {
        console.log('All promises resolved:', values);
        console.log('1st promises resolved:', values[0]);
        console.log('2nd promises resolved:', values[1]);
    })
}

taskWithRandomDelay();



// Exercise 5: Generating a Sequence of Promises
// Objective: Dynamically generate a sequence of promises and process them sequentially using async/await.

// Task:

// Create a function that generates an array of promises, each resolving after a random time.
// Write an async function to process these promises sequentially.


function createPromise(index) {

    
}
