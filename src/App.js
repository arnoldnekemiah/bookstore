import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationBar from './components/NavBar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
