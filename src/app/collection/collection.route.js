import * as collectionController from "./collection.controller.js";
import { Router } from "express";
export const collectionRouter = Router();

collectionRouter.post("/books", collectionController.createCollection);
collectionRouter.post("/authors", collectionController.createAuthorCollection);
collectionRouter.post(
  "/logs/capped",
  collectionController.createCappedCollection,
);
collectionRouter.post("/books/index", collectionController.createBookIndex);
