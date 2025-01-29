// =============================
//     Synchronous (Sync)
// =============================
// Definition: In synchronous code, tasks are executed one after the other, in the order they are written. Each operation must complete before the next one starts.
// Behavior: This can lead to blocking. If a function takes a long time to execute (like waiting for a network response), it holds up the entire program until it completes.

// const func2 = () => {
//     console.log("func2 start and end");
// }

// const func1 = () => {
//     console.log("func1 start");
//     func2();
//     console.log("func1 end");
// }

// func1();

// =============================
//     Asynchronous (Async)
// =============================
// Definition: In asynchronous code, tasks can start, run in the background, and complete at a later time, allowing other tasks to run without waiting.
// Benefits: This non-blocking behavior is particularly useful for operations like network requests, file reading, or timers, where the delay of operations isn't critical to the flow of the rest of the code.

function func2() {
   setTimeout(() => {
    console.log("func2 start and end");
   }, 2000);
}

function func1() {
    console.log("func1 start");
    func2();
    console.log("func1 end");
}

func1();