const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile); // Promisify readFile

const readFileContent = async (filePath) => {
  try {
    const content = await readFileAsync(filePath, "utf8");
    console.log("File Content:\n", content);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

// Call the function with the path to your file
readFileContent("./content/first.txt");
