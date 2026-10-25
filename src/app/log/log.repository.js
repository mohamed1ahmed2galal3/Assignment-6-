import { db } from "../../common/db/connection.js";

export async function createLog(logData) {
  return await db.collection("logs").insertOne(logData);
}
