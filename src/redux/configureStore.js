import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./books/books";

export default configureStore({
  reducer: {
    books: BookSlice,
  },
});
