const mongoose = require("mongoose");

/**
 *
 * @param {*} uri string
 */
function newConnection(uri) {
  try {
    const db = mongoose.createConnection(uri, { useNewUrlParser: true });

    db.on("error", function (err) {
      console.error(
        `MongoDB :: connection ${this.name} ${JSON.stringify(err)}`
      );

      db.close().catch(function () {
        console.error(
          `MongoDB :: failed to close connection ${this.name} ${JSON.stringify(
            err
          )}`
        );
      });
    });

    db.on("connected", function () {
      mongoose.set("debug", function (col, method, query, doc) {
        console.log(
          `MongoDB :: debug ${this.conn.name}::${col}.${method}${JSON.stringify(
            query
          )}${JSON.stringify(doc)}`
        );
      });

      console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on("disconnected", function (err) {
      console.error(
        `MongoDB :: disconnected ${this.name} ${JSON.stringify(err)}`
      );
    });
  } catch (e) {
    throw new Error(e);
  }
}

const { URI_1, URI_2 } = process.env;
const uri1 = newConnection(URI_1);
const uri2 = newConnection(URI_2);

module.exports = {
  uri1,
  uri2,
};
