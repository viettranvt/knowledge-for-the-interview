const express = require("express");
const app = express();
const { addDelayEventOrder } = require("./order.service");

app.use(express.json());
app.post("/order", async (req, res) => {
  try {
    const { userId, order } = req.body;
    await addDelayEventOrder({ orderId: order.id, delay: 5 });

    res.json({
      status: "success",
      msg: order,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening 3000`);
});
