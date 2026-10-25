import { db } from "../../common/db/connection.js";

export async function createBook(data) {
  return await db.collection("books").insertOne(data);
}

export async function batchBooks(data) {
  return await db.collection("books").insertMany(data);
}

export async function updateBookYear(title, year) {
  return await db
    .collection("books")
    .updateOne({ title: title }, { $set: { year: year } });
}

export async function findBookByTitle(title) {
  return await db.collection("books").findOne({ title: title });
}

export async function findBooksByYear(from, to) {
  return await db
    .collection("books")
    .find({
      year: {
        $gte: from,
        $lte: to,
      },
    })
    .toArray();
}

export async function findBooksByGenre(genre) {
  return await db.collection("books").find({ genres: genre }).toArray();
}

export async function getBooksSkipLimit() {
  return await db
    .collection("books")
    .find()
    .sort({ year: -1 })
    .skip(2)
    .limit(3)
    .toArray();
}

export async function findBooksWithIntegerYear() {
  return await db
    .collection("books")
    .find({ year: { $type: "int" } })
    .toArray();
}

export async function findBooksExcludingGenres() {
  return await db
    .collection("books")
    .find({
      genres: {
        $nin: ["Horror", "Science Fiction"],
      },
    })
    .toArray();
}

export async function deleteBooksBeforeYear(year) {
  return await db.collection("books").deleteMany({
    year: { $lt: year }, // $lt less than
  });
}

export async function aggregateBooks1() {
  return await db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $sort: {
          year: -1,
        },
      },
    ])
    .toArray();
}

export async function aggregateBooks2() {
  return await db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
        },
      },
    ])
    .toArray();
}

export async function aggregateBooks3() {
  return await db
    .collection("books")
    .aggregate([
      {
        $unwind: "$genres",
      },
    ])
    .toArray();
}

export async function aggregateBooks4() {
  return await db
    .collection("books")
    .aggregate([
      {
        $lookup: {
          from: "logs",
          localField: "_id",
          foreignField: "bookId",
          as: "logs",
        },
      },
    ])
    .toArray();
}
