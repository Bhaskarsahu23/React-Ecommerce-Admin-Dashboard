import { NavBar, SideNavBar } from './components';
import {
  AddProduct,
  Dashboard,
  Orders,
  Products,
  Reviews,
  Users,
  Transactions,
} from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <main className="min-w-full h-screen flex bg-gray-300">
        <div className="basis-20">
          <SideNavBar />
        </div>
        <div className="w-full basis-80 flex flex-col justify-start items-start">
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};
export default App;
