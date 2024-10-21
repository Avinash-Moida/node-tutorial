// Challenge 1: Simulate Blocking vs Non-Blocking Code

// Step 1: Blocking Code Simulation

// function blockingOperation() {
//   console.log("Blocking operation started...");
//   const start = Date.now();
//   // Simulate a long-running task
//   while (Date.now() - start < 5000) {} // Blocking for 5 seconds
//   console.log("Blocking operation completed!");
// }

// Step 2: Non-Blocking Code Simulation

// function nonBlocingOperation() {
//   console.log("Non-blocking operation started...");
//   setTimeout(() => {
//     console.log("Non-blocking operation completed");
//   }, 5000); // Non-blocking, executes after 5 seconds
// }

// console.log("Program started...");
// blockingOperation();
// nonBlocingOperation();
// console.log("Program ended...");

// This is same example as above

function blockingCode() {
  console.log("blocking code started...");

  const start = Date.now();
  while (Date.now() - start < 5000) {}
  console.log("blocking code completed");
}

function nonBlockingcode() {
  console.log("non blocking code started...");

  setTimeout(() => {
    console.log("non blocking completed...");
  }, 5000);
}

console.log("Operation started");
blockingCode();
nonBlockingcode();
console.log("Operation finished");
