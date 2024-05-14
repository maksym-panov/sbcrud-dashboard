import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/common.css';
import SharedRouter from './shared/SharedRouter';
import UserRouter from './user/UserRouter';
import VendorRouter from './vendor/VendorRouter';
import AdminRouter from './admin/AdminRouter';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/user/*' element={<UserRouter />} />
          <Route path='/vendor/*' element={<VendorRouter />} />
          <Route path='/admin/*' element={<AdminRouter />} />
          <Route path='/*' element={<SharedRouter />} />
        </Routes>
      </BrowserRouter>
      <footer>
        aaaaaaaa
      </footer>
    </>
  );
}

export default App;
