const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.get("/", (req, res, next) => {
  try {
    return res.status(200).json({
      msg: "Hello. This is my app",
    });
  } catch (error) {
    return next(error);
  }
});

// eslint-disable-next-line no-undef
const port = process.env.PORT;

if (!port) {
  console.error("port not found");
  return;
}

app.listen(port, () => {
  console.log(`server is listening at port::${port}`);
});
