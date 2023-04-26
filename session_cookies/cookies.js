const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const port = process.env.PORT || 3000;

app.get("/cookies/get", (req, res, next) => {
  //   const cookie = req.headers.cookie;
  const cookie = req.cookies;
  return res.json({
    msg: cookie,
  });
});

app.get("/cookies/set", (req, res, next) => {
  //   res.setHeader("set-cookie", "username=viettran");
  res
    .cookie("username", "viet_tran", {
      maxAge: 5 * 1000, // thoi gian song format theo milisecond
      // expires: new Date(Date.now() + 5 * 1000), // thoi gian song format theo ngay
      httpOnly: false, // cho phep nguoi dung truy cap browser de lay thong tin cookie
    })
    .cookie("blog", "viettran.com", {
      httpOnly: true, // khong cho phep nguoi dung truy cap browser de lay thong tin cookie, chi phep lay thong qua http
      secure: true, // ma hoa thong tin khi truyen tai du lieu
    });
  return res.json({
    msg: "oke",
  });
});

app.get("/cookies/del", (req, res, next) => {
  res.clearCookie("blog");
  return res.json({
    msg: "oke",
  });
});

app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
