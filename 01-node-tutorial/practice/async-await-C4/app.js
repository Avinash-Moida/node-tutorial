// Challenge 4: Read Multiple Files in Parallel Using Async/Await

const fs = require("fs").promises;
const path = require("path");

// Async function to read and combine file contents
const readFiles = async () => {
  try {
    const file1 = path.join(__dirname, "content/first.txt");
    const file2 = path.join(__dirname, "content/second.txt");

    // Use Promise.all to read all files in parallel
    const results = await Promise.all([
      fs.readFile(file1, "utf8"),
      fs.readFile(file2, "utf8"),
    ]);

    // combine the content with newline seperation
    const combinedContent = results.join("\n");
    console.log("Combined Content:\n", combinedContent);
  } catch (error) {
    console.error("Error reading files:", error); // Handle any errors
  }
};

// Call the async function
readFiles();
