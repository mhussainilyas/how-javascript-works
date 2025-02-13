// ====================
//    scope in js
// ====================
//1. Key Concept: The scope of a variable is determined by its position in the source code, specifically where it is declared.
//2. Different types of scope:
// 1) global scope
// 2) local scope
// 3) function scope
// 4) block scope
// 5) lexical scope

// ======================
//     Global Scope
// ======================
// A variable declared outside any function or block is considered to be in the global scope. This means it is accessible from anywhere in the code.

// var globalVar = "I am a global variable";

// function checkGlobalVar() {
//   console.log(globalVar);
// }

// checkGlobalVar();
// console.log(globalVar);

// =====================
//     Local Scope
// =====================
// Local scoping generally refers to variables that are declared within a specific function or block, making them accessible only within that particular scope.

// function anotherFunction() {
//   var localVar = "I am a local variable";
//   console.log(localVar);
// }

// if (true) {
//   let blockVar = "I am a block variable";
//   console.log(blockVar); 
// }

// anotherFunction();
// console.log(localVar);
// console.log(blockVar);

// ========================
//     Functional Scope
// ========================
// When a variable is declared within a function, it is only accessible within that function and its nested functions. This is known as functional or function-level scoping.

// function myFunction() {
//   var functionVar = "I am a function variable";
//   console.log(functionVar);
// }

// myFunction();
// console.log(functionVar);

// ====================
//     Block Scope
// ====================
// Variables declared with let or const within a block (denoted by {}) are limited to that block. This is known as block-level scoping.

// if (true) {
//   let blockVar = "I am a block variable";
//   console.log(blockVar);
// }

// console.log(blockVar);

// ======================
//     Lexical Scope
// ======================
// Lexical scoping means that the accessibility of variables is determined by the position of the variables within the nested scopes. Inner functions have access to variables of their outer functions, even after the outer function has returned.

// function outerFunction() {
//   var outerVar = "I am an outer variable";

//   function innerFunction() {
//     console.log(outerVar);
//   }

//   return innerFunction;
// }

// const inner = outerFunction();
// inner();