// ====================
//    scope in js
// ====================
//1. Key Concept: The scope of a variable is determined by its position in the source code, specifically where it is declared.
//2. we have three types of scope in js:
// 1) global scope
// 2) function scope
// 3) block scope

// ---------- Lexical Scoping -----------
// Lexical scoping is a way of managing variable access in JavaScript based on the physical structure of the code.
// Lexical scoping in JavaScript is like a set of rules that determines where a variable can be used in your code. It follows the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only within that function or block.

let a = 5;
let b = 10;
// what will be the value of "a"?

// ---------- Global-variable vs Local-variable -----------
const globalVaribale = "I'm a global variable";
function myFuction() {
  const functionVariable = "I'm a function variable";
  if(true) {
    const blockVariable = "I'm a block variable";
    console.log(globalVaribale);
    console.log(functionVariable);
    console.log(blockVariable);
  }
//   console.log(blockVariable); // Error: blockVariable is not define
}
// console.log(functionVariable); // Error: functionVariable is not define.
myFuction();
