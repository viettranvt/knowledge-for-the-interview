const express = require("express");
const app = express();
const { addDelayEventOrder } = require("./order.service");

app.use(express.json());
app.post("/order", async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening 3000`);
});
