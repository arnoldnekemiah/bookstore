import React from 'react';
import PropTypes from 'prop-types';
import progressImage from '../redux/books/progress.png';

function Book({
  title, author, category, removeBook, updateProgress,
}) {
  return (
    <div className="book_container">
      <div className="book-left">
        <div className="book_info">
          <p className="book_category">{category}</p>
          <h2 className="book_title">{title}</h2>
          <p className="book_author">{author}</p>
          <div className="btn">
            <button className="comments-button" type="button">
              Comments
            </button>
            <hr className="line2" />
            <button className="remove-button" type="button" onClick={removeBook}>
              Remove
            </button>
            <hr className="line2" />
            <button className="edit-button" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="book-center">
        <div className="book_center">
          <div className="progress-circle">
            <span className="circle-content">
              <img src={progressImage} alt="Progress Circle" className="progress-image" />
              <div className="detail">
                <p className="percent">64%</p>
                <p className="completed">completed</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="book-right">
        <div className="book_right">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-number">Chapter 17</p>
          <button className="update-progress-button" type="button" onClick={updateProgress}>
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  updateProgress: PropTypes.func.isRequired,
};

export default Book;
