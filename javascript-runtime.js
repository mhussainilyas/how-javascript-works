// ========================
//    Javascript Runtime
// ========================
//  JavaScript is single-threaded, meaning it can execute one piece of code at a time. However, it can handle asynchronous operations (like I/O tasks, timers, etc.) using the event loop, which allows it to offload these operations and continue executing other code.
// How Javascript Works?
// 1) Event Loop
// 2) Call Stack
// 3) Web APIs and Browser Environment
// 4) Async Task API
// 5) Popular Web APIs
// 6) Geo Location (callback based API)
// 7) Task Queue
// 8) setTimeout() (callback based API)
// 9) Microtask Queue
// 10) fetch() (promise based API)

// ==================
//    Event Loop
// ==================
// "The event loop allowing JavaScript to perform asynchronous operations. Asynchronous operations are tasks that are started but not immediately completed. When an asynchronous operation is started, the event loop adds it to a queue. The event loop then continuously monitors the queue and, when a task is complete, moves it to the call stack for execution."

// console.log("First");

// setTimeout(() => {
//     console.log("Second");
// }, 3000);

// console.log("Third");

// ==================
//    Call Stack
// ==================
// "The Call Stack in JavaScript is a fundamental data structure that keeps track of the execution context of functions. It operates on a Last In, First Out (LIFO) principle, meaning that the last function called is the first one to be executed."

// function firstFunction() {
//     secondFunction();
//     console.log("First Function Called.");
// }

// function secondFunction() {
//     thirdFunction();
//     console.log("Second Function Called.");
// }

// function thirdFunction() {
//     console.log("Third Function Called.");
// }

// firstFunction();
// console.log("Fourth Function Called.");

// ====================================
//   Web APIs and Browser Environment
// ====================================
// Web APIs provide a set of functions and protocols that allow developers to interact with the browser and perform various tasks without needing to manage the underlying complexities. They are part of the browser environment and enable communication between the web page and the browser.

// let button = document.getElementById("fetchButton");
// let container = document.querySelector(".userData");
// button.addEventListener("click", () => {
//   fetch("https://randomuser.me/api/").then((response) => {
//     return response.json();
//   }).then((data) => {
//     const user = data.results[0];
//     const userInfo = `
//       <p>Name: ${user.name.first} ${user.name.last}</p>
//       <p>Email: ${user.email}</p>
//       <img src="${user.picture.medium}" alt="user Image"/>
//     `;
//     container.innerHTML = userInfo;
//   });
// });

// ====================
//   Async Task API
// ====================
// "The Async Task API in JavaScript, particularly in the context of the JavaScript runtime (like Node.js or browsers), is designed to handle asynchronous operations efficiently. It allows developers to run code in a non-blocking manner, enabling better performance and responsiveness in applications, especially when dealing with I/O operations, network requests, or timers."

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// fetchData(apiUrl);

// =====================
//   Popular Web APIs
// =====================

// ------- CallBacks -------
// 1) geolocation API
// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error.message)
// );

// 2) setTimeout()
// setTimeout(() => {
//   console.log("Done");
// }, 2000);

// 3) DataBase(DB) requests
// const request = indexedDB.open("myDb");
// request.onsuccess = (event) => {
//   console.log(event);
// };
// request.onerror = (error) => {
//   console.log(error);
// }

// ------- Promises -------
// 1) fetch()
// fetch(...).then(res => ...)

// 2) async/await
// const myFunc = async () => {
//   const [fileHandle] = await window.showOpenFilePicker();
//   const file = await fileHandle.getFile();
// };

// =====================
//   MacroTask Queue
// =====================
// In JavaScript, the main role of a task queue (or callback queue or Macrotask queue) is to manage the execution of asynchronous tasks. When an asynchronous operation completes (like a timer or a network request), its callback is placed in the task queue. Once the call stack is clear, the event loop will execute the callback.

// setTimeout(() => {
//   console.log("1sec Complete");
// }, 1000);

// setTimeout(() => {
//   console.log("2sec Complete");
// }, 2000);

// console.log("Hello Piyare Dost!");

// ====================
//   MicroTask Queue
// ====================
// In JavaScript, the microtask queue plays a crucial role in managing asynchronous operations, particularly with promises and the MutationObserver API. When a promise is resolved or rejected, its corresponding .then(), .catch(), or .finally() callbacks are scheduled to run in the microtask queue. This queue has a higher priority than the macrotask queue (which includes events like setTimeout and setInterval), meaning that microtasks are executed before any macrotasks.

// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 1000);

// setTimeout(() => {
//   console.log("timeout 2");
// }, 2000);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// }).then(() => {
//   console.log("promise 2");
// })

// console.log("end");

//👉👉 "https://github.com/lydiahallie?tab=overview&from=2025-01-01&to=2025-01-31"