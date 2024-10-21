// Challenge 6: Handle Multiple Promises (Promise.all)

const fs = require("fs").promises;
const path = require("path");

const readMulitpleFiles = async () => {
  const file1 = path.join(__dirname, "content/first.txt");
  const file2 = path.join(__dirname, "content/second.txt");

  try {
    const results = await Promise.all([
      fs.readFile(file1, "utf8"),
      fs.readFile(file2, "utf8"),
    ]);

    const combinedContent = results.join("\n");
    console.log("Combined Content:\n", combinedContent);
  } catch (error) {
    console.error("Error reading Files:", error);
  }
};

readMulitpleFiles();
