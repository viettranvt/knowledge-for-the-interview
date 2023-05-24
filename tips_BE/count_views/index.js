const Redis = require("ioredis");
const connection = new Redis();

// eslint-disable-next-line no-unused-vars
async function addVideo(videoId, userId) {
  try {
    const videoKey = `video::${videoId}`;
    const userKey = `user::${userId}`;

    const isOke = await connection.set(userKey, "hits", "NX", "EX", 10);

    if (isOke) {
      await connection.incrby(videoKey);
    }
  } catch (e) {
    console.error("error", e);
  }
}
