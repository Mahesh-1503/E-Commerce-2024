import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../Header.css";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="bg-gray-800 text-white shadow-lg m-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <GiShoppingBag className="mr-2 text-4xl text-white" />
            <span className="text-3xl font-bold text-white">Gadget Galaxy</span>
          </Link>
          <div className="hidden md:flex space-x-10 items-center ml-auto">
            <NavLink
              to="/"
              className="nav-link text-3xl text-white no-underline transition duration-300"
              end
            >
              <FaHome className="inline-block mr-2 text-3xl" />
              Home
            </NavLink>
            <NavLink
              to="/register"
              className="nav-link text-3xl text-white no-underline transition duration-300"
            >
              <FaUserPlus className="inline-block mr-2 text-3xl" />
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link text-3xl text-white no-underline transition duration-300"
            >
              <FaSignInAlt className="inline-block mr-2 text-3xl" />
              Login
            </NavLink>
            <Link
              to="/cart"
              className="cart-link nav-link text-white no-underline transition duration-300"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="cart-text" style={{ marginRight: "0.5rem" }}>
                Cart
              </span>
              <FaShoppingCart
                className="cart-icon"
                style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
              />
              <span className="item-count" style={{ fontSize: "1.5rem" }}>
                (0)
              </span>
            </Link>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={handleNavCollapse}
            aria-label="Toggle navigation"
          >
            {isNavCollapsed ? (
              <FaBars className="text-3xl" />
            ) : (
              <FaTimes className="text-3xl" />
            )}
          </button>
        </div>
        <div
          className={`${
            isNavCollapsed ? "hidden" : "block"
          } md:hidden pb-4 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className="nav-link text-3xl text-white no-underline transition duration-300"
              end
            >
              <FaHome className="inline-block mr-2 text-3xl" />
              Home
            </NavLink>
            <NavLink
              to="/register"
              className="nav-link text-3xl text-white no-underline transition duration-300"
            >
              <FaUserPlus className="inline-block mr-2 text-3xl" />
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link text-3xl text-white no-underline transition duration-300"
            >
              <FaSignInAlt className="inline-block mr-2 text-3xl" />
              Login
            </NavLink>
            <Link
              to="/cart"
              className="cart-link flex items-center nav-link text-white no-underline transition duration-300"
            >
              <span className="cart-text">Cart</span>
              <FaShoppingCart className="cart-icon text-3xl ml-2" />
              <span className="item-count text-2xl ml-2">(0)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
