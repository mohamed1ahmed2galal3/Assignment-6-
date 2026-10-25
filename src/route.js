import { Router } from "express";
import { collectionRouter } from "./app/collection/collection.route.js";
import { bookRouter } from "./app/books/book.route.js";
import { logRouter } from "./app/log/log.route.js";

export const router = Router();

router.use("/collection", collectionRouter);
router.use("/books", bookRouter);
router.use("/logs", logRouter);
