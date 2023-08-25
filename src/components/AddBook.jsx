import React, { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/api';

const initialBook = {
  title: '',
  author: '',
  category: '',
};

export default function AddNewBook() {
  const [book, setBook] = useState(initialBook);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      ...book,
      item_id: uuidv4(),
    };
    dispatch(addBook(newBook));
    setBook(initialBook);
  }

  return (
    <section>
      <div className="form">
        <h2>Add New Book</h2>
        <form>
          <input
            value={book.title}
            type="text"
            name="title"
            placeholder="Title"
            className="title-input"
            onChange={handleChange}
          />

          <input
            value={book.author}
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleChange}
          />

          <input
            value={book.category}
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />

          <button type="submit" id="add-book" onClick={handleSubmit}>
            ADD BOOK
          </button>
        </form>
      </div>
    </section>
  );
}
