import React from "react";
import Layout from "./components/Layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Correct path
import Category from "./pages/Category"; // Correct path
import Register from "./pages/Register"; // Correct path
import Login from "./pages/Login"; // Correct path
import Cart from "./pages/Cart"; // Correct path
import PageNotFound from "./pages/Pagenotfound"; // Correct path

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
