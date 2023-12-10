import { Routes, Route } from "react-router-dom";
import Books from "./View/Books";
const Main = () => (
  <Routes>
    <Route path="/" element={<Books />} />
  </Routes>
);
export default Main;
