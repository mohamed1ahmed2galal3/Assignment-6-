import { db } from "./../../common/db/connection.js";
export async function createCollection() {
  return await db.createCollection("books", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title"],
        properties: {
          title: {
            bsonType: "string",
            minLength: 2,
          },
        },
      },
    },
  });
}

export async function createAuthorCollection(authorDate) {
  return await db.collection("authors").insertOne(authorDate);
}

export async function CreateCappedCollection() {
  return await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
}

export async function createBooksIndex() {
  return await db.collection("books").createIndex({ title: 1 });
}
