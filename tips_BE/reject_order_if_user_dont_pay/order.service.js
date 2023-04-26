const redis = require("ioredis");
const client = new redis();

const addDelayEventOrder = ({ orderId, delay }) => {
  return new Promise((res, rej) => {
    client.set(orderId, "cancel order", "EX", delay, (err, result) => {
      if (err) return rej(err);
      return res(result);
    });
  });
};

module.exports = {
  addDelayEventOrder,
};
