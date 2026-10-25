import * as bookRepository from "./book.repository.js";

export async function createBook(bookData) {
  return await bookRepository.createBook(bookData);
}

export async function batchBook(books) {
  return await bookRepository.batchBooks(books);
}

export async function updateBookYear(title, year) {
  const result = await bookRepository.updateBookYear(title, year);
  if (result.matchedCount === 0) {
    throw new Error("Book not found");
  }
  return result;
}

export async function findBookByTitle(title) {
  const book = await bookRepository.findBookByTitle(title);
  if (!book) {
    throw new Error("Book not found");
  }
  return book;
}

export async function findBooksByYear(from, to) {
  return await bookRepository.findBooksByYear(from, to);
}

export async function findBooksByGenre(genre) {
  return await bookRepository.findBooksByGenre(genre);
}

export async function getBooksSkipLimit() {
  return await bookRepository.getBooksSkipLimit();
}

export async function findBooksWithIntegerYear() {
  return await bookRepository.findBooksWithIntegerYear();
}

export async function findBooksExcludingGenres() {
  return await bookRepository.findBooksExcludingGenres();
}

export async function deleteBooksBeforeYear(year) {
  return await bookRepository.deleteBooksBeforeYear(year);
}

export async function aggregateBooks1() {
  return await bookRepository.aggregateBooks1();
}

export async function aggregateBooks2() {
  return await bookRepository.aggregateBooks2();
}

export async function aggregateBooks3() {
  return await bookRepository.aggregateBooks3();
}

export async function aggregateBooks4() {
  return await bookRepository.aggregateBooks4();
}
