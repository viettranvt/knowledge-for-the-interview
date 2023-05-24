const express = require("express");
const app = express();

app.use("/api", (req, res, next) => {
  try {
    return res.status(200).json({
      msg: "hello world",
    });
  } catch (error) {
    return next(error);
  }
});

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
