import { Router } from "express";
import * as bookController from "./book.controller.js";
export const bookRouter = Router();

bookRouter.post("/", bookController.createBook);
bookRouter.post("/batch", bookController.batchBook);
bookRouter.patch("/:title", bookController.updateBookYear);
bookRouter.get("/years", bookController.findBooksByYear);
bookRouter.get("/genre", bookController.findBooksByGenre);
bookRouter.get("/skip-limit", bookController.getBooksSkipLimit);
bookRouter.get("/year-integer", bookController.findBooksWithIntegerYear);
bookRouter.get("/exclude-genres", bookController.findBooksExcludingGenres);
bookRouter.delete("/before-year", bookController.deleteBooksBeforeYear);
bookRouter.get("/aggregate1", bookController.aggregateBooks1);
bookRouter.get("/aggregate2", bookController.aggregateBooks2);
bookRouter.get("/aggregate3", bookController.aggregateBooks3);
bookRouter.get("/aggregate4", bookController.aggregateBooks4);
bookRouter.get("/:title", bookController.findBookByTitle);
