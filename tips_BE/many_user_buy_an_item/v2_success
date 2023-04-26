const express = require("express");
const app = express();
const { get, set, setnx, incrBy, decrBy, exists } = require("./redis");

app.get("/order", async (req, res) => {
  // so luogn ton kho
  const itemNumber = 10;
  // ten san pham
  const itemName = "iphone13";

  //moi lan mua la 1
  const buyNumber = 1;

  // sl ban neu chua ban set bang 0 neu ban thi +1
  if (!(await exists(itemName))) {
    // setnx
    // neu co dong thoi nhieu nguoi mua hang cung luc thi su dung setnx se khong duoc dat lai
    await set(itemName, 0);
  }

  // neu sl ban + sl mua > sl ton kho => return failed
  // neu user order thanh cong
  const soldNumber = await incrBy(itemName, buyNumber);

  if (soldNumber > itemNumber) {
    console.log("het hang");
    return;
  }

  return res.json({
    status: 200,
    msg: "OKE",
    time: new Date().getTime(),
  });
});

app.listen(3000, () => {
  console.log(`the server is listening at port 3000`);
});
