const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  .then(console.log("connected db successfully"))
  .catch((err) => {
    console.error("connect db failed", err);
  });

const schema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const model = mongoose.model("user", schema);

// ATM
app.post("/user", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const rs = await model.create({ userId, amount });

    return res.json({
      data: rs,
    });
  } catch (e) {
    console.error("failed", e);
  }
});

// chuyen tien A->B
app.post("/transfer", async (res, req) => {
  const session = await mongoose.startSession();
  try {
    const { fromId, toId, amount } = req.body;
    // create session
    session.startTransaction();
    const amountFrom = await model.findOneAndUpdate(
      {
        userId: +fromId,
      },
      {
        $inc: { amount: -amount },
      },
      { session, new: true }
    );

    console.log(amountFrom);

    const amountTo = await model.findOneAndUpdate(
      {
        userId: +toId,
      },
      {
        $inc: { amount: +amount },
      },
      { session, new: true }
    );

    console.log(amountTo);

    return res.json({
      msg: "oke",
    });
  } catch (e) {
    console.error("failed", e);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening 3000`);
});
