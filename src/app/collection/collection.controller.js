import * as collectionService from "./collection.service.js";

export async function createCollection(req, res, next) {
  try {
    await collectionService.createCollection();
    res.status(201).json({
      message: "collection created successfully",
      success: true,
    });
  } catch (error) {
    next(error);
  }
}

export async function createAuthorCollection(req, res, next) {
  try {
    const result = await collectionService.createAuthorCollection(req.body);
    res.status(201).json({
      message: "Author Created Successfully ",
      success: true,
      insertedId: result.insertedId,
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    next(error);
  }
}

export async function createCappedCollection(req, res, next) {
  try {
    await collectionService.createCappedCollection();
    res.status(201).json({
      message: "capped collection created successfully",
      success: true,
    });
  } catch (error) {
    next(error);
  }
}

export async function createBookIndex(req, res, next) {
  try {
    const indexName = await collectionService.createBooksIndex();
    res.status(201).json({
      message: "Books Index created successfully",
      success: true,
      indexName,
    });
  } catch (error) {
    next(error);
  }
}
