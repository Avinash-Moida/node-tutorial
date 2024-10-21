/*Challenge 1: Create a Simple API
Task: Create a server that returns different types of content depending on the route. For example:
/ should return a simple "Hello World!" message.
/json should return a JSON response with some user information (e.g., name, age).
/html should return a simple HTML response with a basic webpage.
Hints:
Use res.setHeader('Content-Type', 'application/json') for JSON response.
Use res.setHeader('Content-Type', 'text/html') for HTML.
*/

// Steps to Create a Simple API

// 1: Set up the basic server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const user = { name: "Avinash Moida", age: 30 };
    res.end(JSON.stringify(user));
  } else if (req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Welcome to My Web Page</h1>
          <p>This is a simple HTML page served by Node.js!</p>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist!</p>
        </body>
      </html>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
