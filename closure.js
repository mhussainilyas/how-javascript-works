// =====================
//    Closure in JS
// =====================
// A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.

// 1st Case
// function outerFunction() {
//     var outerVariable = "I'm outer variable.";
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// var closureFunction = outerFunction();
// closureFunction();

// 1 more example
function multiplier(factor) {
  return function (number) {
    console.log(`number is: ${number}\nfactor is: ${factor}`);
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

// 2nd Case
function outerFunction() {
  var outerVariable = "I'm outer variable.";
  function innerFunction() {
    console.log(outerVariable);
    // return outerVariable;
  }
  return innerFunction();
}
outerFunction();
// console.log(outerVariable());
