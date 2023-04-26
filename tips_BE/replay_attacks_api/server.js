"user strict";
const { genSign } = require("../utils");

const that = (module.exports = {
  listPlayerByClub: async (req, res, next) => {
    try {
      const { time, sign, nonce } = req.query;

      if (!time || !sign || !nonce) {
        return res.json({
          status: 400,
          msg: "bad request",
        });
      }

      // compare time
      const isTime = Math.floor((Date.now() - time) / 1000);

      if (isTime > 30) {
        return res.json({
          status: 403,
          msg: "expired",
        });
      }

      const signServer = await genSign(req.query);

      if (signServer !== sign) {
        return res.json({
          status: 400,
          msg: "sign invalid",
        });
      }

      return res.json({
        status: 200,
        msg: "oke",
        data: [],
      });
    } catch (e) {
      next(e);
    }
  },
});
