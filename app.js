try {
  require("./database/init.multi.mongo");
} catch (e) {
  console.error(JSON.stringify(e));
}
