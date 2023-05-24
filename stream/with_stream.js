const { createReadStream } = require("fs");
const { createServer } = require("http");

const server = createServer();

server.on("request", (req, res) => {
  const result = createReadStream("./doc.md");
  res.pipe(result);
});

// eslint-disable-next-line no-undef
console.log(process.pid);
server.listen(3000);
