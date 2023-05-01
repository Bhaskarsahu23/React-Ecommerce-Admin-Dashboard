import { useState } from 'react';
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
import { menuContext } from './Context/Context';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <BrowserRouter>
      <main className="min-w-full h-screen flex bg-gray-300">
        <menuContext.Provider value={[activeMenu, setActiveMenu]}>
          <div className={`${activeMenu ? 'basis-10' : 'basis-18'}`}>
            <SideNavBar />
          </div>
          <div
            className={`w-full ${
              activeMenu ? 'basis-90' : 'basis-80'
            } flex flex-col justify-start items-start`}
          >
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
        </menuContext.Provider>
      </main>
    </BrowserRouter>
  );
};
export default App;
