// =====================
//      Call Stack
// =====================
// Definition: The call stack is a data structure that keeps track of function calls in a program. It operates in a Last In, First Out (LIFO) order, meaning that the most recently called function is the one that will finish executing first.

function firstFunction() {
  console.log("First Function");
  secondFunction();
}   

function secondFunction() {
  console.log("Second Function");
  setTimeout(() => {
    console.log("func2 is starting...");
  }, 3000);
  thirdFunction();
}

function thirdFunction() {
  console.log("Third Function");
}

firstFunction();

// Here we have a call stack visualizer 👇👇
//https://kamronbekshodmonov.github.io/JELoop-Visualizer/