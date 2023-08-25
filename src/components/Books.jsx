import BookList from './BookList';
import AddNewBook from './AddBook';
import '../styles/Books.css';

export default function Books() {
  return (
    <>
      <BookList />
      <hr className="line3" />
      <AddNewBook />
    </>
  );
}
