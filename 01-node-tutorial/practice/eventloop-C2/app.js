// Challenge 2: Implement Promises

// Step 1: Create the getText Function with Promises

const fs = require("fs");
const path = require("path");

const getText = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file: ${filePath}`);
      } else {
        resolve(data);
      }
    });
  });
};

// Step 2: Read Two Files

const file1 = path.join(__dirname, "content/first.txt");
const file2 = path.join(__dirname, "content/second.txt");

Promise.all([getText(file1), getText(file2)])
  .then((results) => {
    const combinedContent = results.join("\n");
    console.log("Combined Content: \n", combinedContent);
  })
  .catch((error) => console.log(error));
