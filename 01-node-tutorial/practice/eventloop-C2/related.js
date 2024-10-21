// Structure of a Promise

const myPromise = new Promise((resolve, reject) => {
  // Async operation here
  if (successful) {
    resolve("The operation was successful!"); // When it's successful
  } else {
    reject("Something went wrong!"); // When it fails
  }
});

//Handling Promises:

myPromise
  .then((result) => {
    console.log(result); // Handle success
  })
  .catch((error) => {
    console.log(error); // Handle failure
  });

//Example: Reading a File with Promises
const fs = require("fs");

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject("Error reading file!");
      } else {
        resolve(data); // Resolve with the file content if successful
      }
    });
  });
};

// Using the Promise:
readFilePromise("path/to/file.txt")
  .then((content) => {
    console.log("File content:", content);
  })
  .catch((error) => {
    console.log(error);
  });
