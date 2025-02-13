// ===========================================
//    Understanding Closures in JavaScript
// ===========================================

// What is a Closure?
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables. A closure is created when a function is defined inside another function and retains access to the outer function’s scope.

// Properties of Closures
// 1) A closure is the combination of a function and the lexical environment within which that function was declared.
// 2) The inner function can access:
//   -> Its own variables.
//   -> Variables of the outer function.
//   -> Global variables.

// ==================
//   Simple Example
// ==================

// function outerFunction() {
//   let outerVariable = "I am outer variable.";
//   function firstFunction() {
//     console.log(outerVariable);
//   }
//   return firstFunction;
// }
// let inner = outerFunction();
// inner();

// ====================================
//    Example of Data Encapsulation
// ====================================

// function createCounter() {
//   let count = 0;

//   let obj = {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//     value: function () {
//       console.log(count);
//     },
//   };

//   return obj;
// }

// let counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.value();

// ==================================
//   Example of Function Factories
// ==================================

// function outerFunction(first) {
//   function innerFunction(last) {
//     console.log(`${first} ${last}`);
//   }
//   return innerFunction;
// }

// const sayHello = outerFunction("Muhammad");
// sayHello("Hussain");

// const sayHi = outerFunction("Suleman");
// sayHi("Amjad");

// ===================================
//    Example of Maintaining State
// ===================================

// function countDown(start) {
//   function reduce() {
//     console.log(start--);
//   }
//   return reduce;
// }

// const count = countDown(5);
// count();
// count();
// count();

// =====================================
//   Example of Asynchronous Closures
// =====================================

// function delayedLonger(message, delay) {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

// delayedLonger("Muhammad Hussain", 1000);

// =========================
//    Practical Use Cases
// =========================

// ------- Creating Private Variables --------

// 1st Method
// function Person(name) {
//   let personName = name;

//   this.getName = function() {
//     return personName;
//   };

//   this.setName = function(newName) {
//     personName = newName;
//   };
// }

// const person = new Person("Muhammad");
// console.log(person.getName());
// person.setName("Muhammad Hussain");
// console.log(person.getName());

// 2nd Method
// function person(name) {
//   let myName = name;
//   let obj = {
//     getName: function () {
//       return myName;
//     },
//     setName: function (newName) {
//       myName = newName;
//     },
//   };
//   return obj;
// }

// const myFunction = person("Muhammad Hussain");
// console.log(myFunction.getName());
// myFunction.setName("Muhammad Suleman Amjad");
// console.log(myFunction.getName());

// ------- Event Listener --------

// function setupListener(elementId) {
//   let count = 0;
//   document.getElementById(elementId).addEventListener("click", () => {
//     count++;
//     console.log(`Button clicked ${count} times.`);
//   });
// }

// setupListener("fetchButton"); 