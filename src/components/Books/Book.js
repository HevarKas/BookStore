import React, { useState } from "react";
import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Book = ({ book, handleRemoveBook }) => {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const { category, title, author } = book[0];

  return (
    <div className="Book">
      <div className="text-book">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <span className="author">{author}</span>
        <div className="function-button">
          <button
            className="remove-button"
            type="button"
            disabled={progress !== 100}
            onClick={handleRemoveBook}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex-items">
        <div className="progress-bar">
          <div className="progress">
            <CircularProgressbar value={progress} />
          </div>
          <div className="progress-percentage">
            <p>{progress}%</p>
            <span>Completed</span>
          </div>
        </div>
        <div className="progress-buttons">
          <p>CURRENT CHAPTER</p>
          <button type="button" onClick={handleProgress}>
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    })
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
