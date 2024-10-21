const http = require("http");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Here is our short history");
  } else {
    // Serve the custom 404 page
    fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 - Internal Server Error");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server is listening to the port 5000...");
});
