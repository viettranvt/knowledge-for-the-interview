const redis = require("ioredis");
const client = new redis();

const express = require("express");
const app = express();

client.psubscribe("__keyevent@0__:expired");
client.on("pmessage", (pattern, chanel, message) => {
  /// update trong db oderid chua thanh toan
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`event listener is listening 3001`);
});
