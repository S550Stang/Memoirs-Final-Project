const client = require("../db/db");

const postMemories = async (userId, name, description, imgArr) => {
  try {
    await client.query("BEGIN");
    const insertMemoryQuery = {
      text: `INSERT INTO public.memories(user_id, name, description) VALUES($1, $2, $3) RETURNING *`,
      values: [userId, name, description],
    };
    const memoryInsertionResult = await client.query(insertMemoryQuery);
    const { id: memoryId } = memoryInsertionResult.rows[0];
    const postImagesPromiseArr = [];

    for (const imgAddress of imgArr) {
      const insertImagesQuery = {
        text: `INSERT INTO public.images(user_id, memory_id, image) VALUES($1, $2, $3) RETURNING *`,
        values: [userId, memoryId, imgAddress],
      };
      postImagesPromiseArr.push(client.query(insertImagesQuery));
    }

    const insertImagesResult = await Promise.all(postImagesPromiseArr);
    await client.query("COMMIT");
    const result = {
      memory: memoryInsertionResult.rows[0],
      image: insertImagesResult,
    };
    return result;
  } catch (e) {
    const m = "Error while posting memory data in database";
    console.error(m, e);
    throw new Error(m, e.message);
  }
};

const fetchAllMemories = async (userId) => {
  try {
    const selectMyMemoriesQuery = {
      text: `select memories.id, memories."name", memories.description, images.image from public.memories join public.images on memories.id = images.memory_id and memories.user_id = $1`,
      values: [userId],
    };
    const selectMyMemoriesResult = await client.query(selectMyMemoriesQuery);
    const myMemories = selectMyMemoriesResult.rows;
    return myMemories;
  } catch (e) {
    const m = "Error while Fetching memory from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

module.exports = { postMemories, fetchAllMemories };