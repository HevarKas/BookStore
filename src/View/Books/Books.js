import React from "react";
import AddBooks from "../../components/Books/AddBooks";
import BookList from "../../components/Books/BookList";

const Books = () => (
  <div className="body-container">
    <BookList />
    <AddBooks />
  </div>
);

export default Books;
