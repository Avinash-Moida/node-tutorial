// What is Async/Await?
// Key Concepts

// 1.Async Function

async function myFunction() {
  return "Hello, World!";
}

myFunction().then((result) => console.log(result)); // Logs: "Hello, World!"

// 2.Await Keyword

const fetchaData = async () => {
  const result = await someAsyncOperation(); // Wait for the operation to complete
  console.log(result); // Log the result once it's available
};

// Example of Async/Await in Action:

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000); // Simulates a 2-second delay
  });
};

const fetchData = async () => {
  console.log("Fetching data...");
  const data = await getData(); // Wait for getData to resolve
  console.log(data); // Log the fetched data
};

fetchData(); // Output after 2 seconds: "Data fetched!"

// Example of Error Handling

const fetchDataWithErrorHandling = async () => {
  try {
    const data = await someAsyncOperation(); // Replace with actual async operation
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
