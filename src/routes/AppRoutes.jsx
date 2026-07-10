import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import Offers from "../pages/offers/Offers";
import Contact from "../pages/contact/Contacts";

import Search from "../pages/search/Search";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Restaurant from "../pages/restaurant/Restaurants";
import Checkout from "../pages/checkout/Checkout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />

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
