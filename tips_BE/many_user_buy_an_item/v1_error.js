const express = require("express");
const app = express();
const { get, set, incrBy, exists } = require("./redis");

app.get("/order", async (req, res) => {
  // so luogn ton kho
  const itemNumber = 10;
  // ten san pham
  const itemName = "iphone13";

  //moi lan mua la 1
  const buyNumber = 1;

  // sl ban neu chua ban set bang 0 neu ban thi +1
  if (!(await exists(itemName))) {
    //do set ko co tinh nguyen tu
    await set(itemName, 0);
  }

  // lay sl ban ra
  let soldNumber = await get(itemName);

  // neu sl ban + sl mua > sl ton kho => return failed
  if (+soldNumber + buyNumber > itemNumber) {
    console.log("het hang");
    return;
  }

  // neu user order thanh cong
  soldNumber = await incrBy(itemName, buyNumber);

  return res.json({
    status: 200,
    msg: "OKE",
    time: new Date().getTime(),
  });
});

app.listen(3000, () => {
  console.log(`the server is listening at port 3000`);
});
