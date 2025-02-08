// ========================
//      Hoisting In Js
// ========================
//1. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
//2. Before executing our code, JavaScript engine scans the code and creates a property for each variable or function in the code. For variable, It reserves space for them in memory and sets an initial value of undefined, and for functions it also reserves space but sets an initial value as a reference to the actual function in memory. That's why we can call a function, but if we try to access a variable, we will get undefined.
//3. hoisting not work in "let" and "const" keyword and also not work in "fat arrow fuction".

// === behind the scene hoisting work ===
// var num;
// function greet() {
//     return "Hye Muhammad Hussain.";
// }

console.log(num);
console.log(greet());

var num = 10;
function greet() {
    return "Hye Muhammad Hussain.";
}
