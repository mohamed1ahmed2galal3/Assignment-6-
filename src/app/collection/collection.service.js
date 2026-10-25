import * as collectionRepo from "./collection.repository.js";

export async function createCollection() {
  return await collectionRepo.createCollection();
}

export async function createAuthorCollection(authorData) {
  return await collectionRepo.createAuthorCollection(authorData);
}

export async function createCappedCollection() {
  return await collectionRepo.CreateCappedCollection();
}

export async function createBooksIndex() {
  return await collectionRepo.createBooksIndex();
}
