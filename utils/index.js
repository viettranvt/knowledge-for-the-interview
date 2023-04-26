const md5 = require("md5");

module.exports = {
  genSign: (params) => {
    const keyToken = "xxxx";

    const sortKey = [];
    params.keyToken = keyToken;
    params.v = "v1";

    for (const key in params) {
      if (key !== "sign") {
        sortKey.push(key);
      }
    }

    sortKey.sort(); // sort of ascii
    let paramsHolder = "";

    sortKey.forEach((key) => {
      paramsHolder += key + params[key]; // clubManu
    });

    return md5(paramsHolder.toString());
  },
};
