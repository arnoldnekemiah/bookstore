import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => { // Corrected the syntax here
    try {
      await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWk1l39lfUnyyh6yELcl/books',
        book,
      );
    } catch (e) {
      throw new Error(e);
    }
    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookID) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWk1l39lfUnyyh6yELcl/books/${bookID}`,
      );
    } catch (e) {
      throw new Error(e);
    }
    return bookID;
  },
);

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWk1l39lfUnyyh6yELcl/books',
  );
  const books = Object.entries(response.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});
