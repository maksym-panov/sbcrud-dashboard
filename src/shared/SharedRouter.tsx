import { Route, Routes } from "react-router-dom";
import BooksPage from "./books/BooksPage";
import BookPage from "./books/BookPage";
import GenresPage from "./genres/GenresPage";
import GenrePage from "./genres/GenrePage";
import CartPage from "./cart/CartPage";
import CheckoutPage from "./cart/CheckoutPage";
import PageNotFound from "../errors/PageNotFound";

const SharedRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:id' element={<BookPage />} />
        <Route path='/genres' element={<GenresPage />} />
        <Route path='/genres/:id' element={<GenrePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes> 
    </>
  )
};

export default SharedRouter;