const { readFileSync } = require("fs");
const { createServer } = require("http");

const server = createServer();

server.on("request", (req, res) => {
  const result = readFileSync("./doc.md");
  res.end(result);
});

server.listen(3000);
