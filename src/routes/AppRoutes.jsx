import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Restaurant from "../pages/restaurant/Restaurant";
import Checkout from "../pages/checkout/Checkout";
import Search from "../pages/search/Search";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/restaurant/:id" element={<Restaurant />} />

          <Route path="/checkout" element={<Checkout />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;