import * as bookService from "./book.service.js";

export async function createBook(req, res, next) {
  try {
    const result = await bookService.createBook(req.body);
    res.status(201).json({
      message: "book created successfully",
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    next(error);
  }
}
export async function batchBook(req, res, next) {
  try {
    const result = await bookService.batchBook(req.body);
    res.status(201).json({
      message: "book created successfully",
      success: true,
      acknowledged: result.acknowledged,
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateBookYear(req, res, next) {
  try {
    const { title } = req.params;
    const { year } = req.body;
    const result = await bookService.updateBookYear(title, year);
    res.status(200).json({
      message: "Book updated successfully",
      modifiedCount: result.modifiedCount,
      matchedCount: result.matchedCount,
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    next(error);
  }
}

export async function findBookByTitle(req, res, next) {
  try {
    const { title } = req.query;

    const book = await bookService.findBookByTitle(title);

    res.status(200).json({
      message: "Book found successfully",
      book,
    });
  } catch (error) {
    next(error);
  }
}

export async function findBooksByYear(req, res, next) {
  try {
    const from = Number(req.query.from);
    const to = Number(req.query.to);
    const books = await bookService.findBooksByYear(from, to);

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function findBooksByGenre(req, res, next) {
  try {
    const { genre } = req.query;

    const books = await bookService.findBooksByGenre(genre);

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function getBooksSkipLimit(req, res, next) {
  try {
    const books = await bookService.getBooksSkipLimit();

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function findBooksWithIntegerYear(req, res, next) {
  try {
    const books = await bookService.findBooksWithIntegerYear();

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function findBooksExcludingGenres(req, res, next) {
  try {
    const books = await bookService.findBooksExcludingGenres();

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteBooksBeforeYear(req, res, next) {
  try {
    const year = Number(req.query.year);

    const result = await bookService.deleteBooksBeforeYear(year);

    res.status(200).json({
      message: "Books deleted successfully",
      deletedCount: result.deletedCount,
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    next(error);
  }
}

export async function aggregateBooks1(req, res, next) {
  try {
    const books = await bookService.aggregateBooks1();

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function aggregateBooks2(req, res, next) {
  try {
    const books = await bookService.aggregateBooks2();

    res.status(200).json({
      message: "Books retrieved successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function aggregateBooks3(req, res, next) {
  try {
    const books = await bookService.aggregateBooks3();

    res.status(200).json({
      message: "Genres separated successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}

export async function aggregateBooks4(req, res, next) {
  try {
    const books = await bookService.aggregateBooks4();

    res.status(200).json({
      message: "Books and logs joined successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    next(error);
  }
}
