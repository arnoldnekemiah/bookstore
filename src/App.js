import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationBar from './components/NavBar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import AddBook from './components/Book';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
        <AddBook />
      </div>
    </Provider>
  );
}

export default App;
