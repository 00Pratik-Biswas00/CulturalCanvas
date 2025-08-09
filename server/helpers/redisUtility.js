import { redisClient } from "../config.js";

export const getFromCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error fetching from cache:", error);
    return null;
  }
};

export const setToCache = async (key, value, ttl = 600) => {
  try {
    await redisClient.set(key, JSON.stringify(value), {
      EX: ttl,
    });
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};
