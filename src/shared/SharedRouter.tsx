import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./books/BooksPage";
import BookPage from "./books/BookPage";

const SharedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/books' element={<BooksPage />} />
          <Route path='/books/:id' element={<BookPage />} />
          <Route path='/genres' />
          <Route path='/genres/:id' />
          <Route path='/cart' />
          <Route path='/checkout' />
          <Route path='/success' />
          <Route path='/error' />
        </Routes> 
      </BrowserRouter>
    </>
  )
};

export default SharedRouter;