"use strict";

const ioRedis = require("ioredis");
const redis = new ioRedis();

const get = async (key) => {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const set = async (key, value) => {
  return new Promise((resolve, reject) => {
    redis.set(key, value, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const incrBy = async (key, count) => {
  return new Promise((resolve, reject) => {
    redis.incrby(key, count, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const decrBy = async (key, count) => {
  return new Promise((resolve, reject) => {
    redis.decrBy(key, count, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const exists = async (key) => {
  return new Promise((resolve, reject) => {
    redis.exists(key, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const setnx = async (key, count) => {
  return new Promise((resolve, reject) => {
    redis.setnx(key, count, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = {
  get,
  set,
  incrBy,
  decrBy,
  exists,
  setnx,
};
