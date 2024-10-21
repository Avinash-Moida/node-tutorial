// Challenge 3: Implement Async/Await

// Step 1: Refactor the Code

const fs = require("fs");
const path = require("path");

// Function to get text from a file using Promises

const getText = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file ${filePath}`);
      } else {
        resolve(data);
      }
    });
  });
};

// Async function to read and combine file contents
const readFiles = async () => {
  try {
    const file1 = path.join(__dirname, "content/first.txt");
    const file2 = path.join(__dirname, "content/second.txt");

    // Await the results of getText for both files
    const content1 = await getText(file1);
    const content2 = await getText(file2);

    // Combine the content with newline seperation
    const combinedContent = `${content1}\n${content2}`;
    console.log("combinedContent:\n", combinedContent);
  } catch (error) {
    console.error(error); // Handle any errors
  }
};

// Call the async function
readFiles();
