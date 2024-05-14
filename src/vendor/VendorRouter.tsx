import { Route, Routes } from "react-router-dom";
import NewBookPage from "./books/NewBookPage";
import EditBookPage from "./books/EditBookPage";
import NewGenrePage from "./genres/NewGenrePage";
import EditGenrePage from "./genres/EditGenrePage";
import OrdersPage from "./orders/OrdersPage";
import OrderPage from "./orders/OrderPage";
import PageNotFound from "../errors/PageNotFound";
import BooksPage from "../shared/books/BooksPage";
import GenresPage from "../shared/genres/GenresPage";
import { UserRole } from '../config/UserRole';

const VendorRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/new' element={<NewBookPage />} />
        <Route path='/books/:id/edit' element={<EditBookPage />} />
        <Route path='genres' element={<GenresPage userRole={UserRole.VENDOR} />} />
        <Route path='/genres/new' element={<NewGenrePage />} />
        <Route path='/genres/:id/edit' element={<EditGenrePage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/orders/:id' element={<OrderPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route />
      </Routes>
    </>
  );
};

export default VendorRouter;