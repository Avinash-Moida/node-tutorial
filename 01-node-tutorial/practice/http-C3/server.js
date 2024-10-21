const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL with query parameters

  if (parsedUrl.pathname === "/greet") {
    const name = parsedUrl.query.name; // Get the name query parameter

    if (name) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hello, ${name}!`);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, Guest!");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
