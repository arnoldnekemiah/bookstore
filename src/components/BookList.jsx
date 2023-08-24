import { useEffect, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import './Styles/BookList.css';
import { deleteBook, getBooks } from '../redux/api';

function BookList() {
  const { isLoading, isError, value } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  return (
    <>
      {loading}
      {error}
      <ul style={{ listStyle: 'none' }}>
        {value.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              removeBook={() => dispatch(deleteBook(book.item_id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
