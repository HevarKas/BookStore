import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks, addBookAsync } from "../../redux/books/books";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  const handleAddBook = async () => {
    if (title.trim() !== "" || author.trim() !== "" || category.trim() !== "") {
      const newBook = {
        item_id: Math.floor(Math.random() * 1000),
        title,
        author,
        category,
      };
      await dispatch(addBookAsync(newBook));
      resetForm();
      dispatch(fetchBooks());
    }
  };

  return (
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <div className="add-data">
        <div className="data-first">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="data-last">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button onClick={handleAddBook} type="submit">
            ADD BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
