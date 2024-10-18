import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// Import unique icons from Heroicons
import { HomeIcon, UserPlusIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
// Import GiShoppingBag from react-icons
import { GiShoppingBag } from 'react-icons/gi';
import '../../index.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    header.classList.add('slide-in');
  }, []);

  return (
    <header id="header" className="header">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <GiShoppingBag className="h-10 w-10 text-white mr-2" />
          <span className="text-2xl font-bold text-white">Ecommerce App</span>
        </Link>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="text-white">☰</span>
        </button>

        <div className={`md:flex ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`} id="navbar">
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link p-2 rounded transition-transform transform ${isActive ? "active" : ""}`
                }
              >
                <HomeIcon className="h-5 w-5 inline-block mr-1" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `nav-link p-2 rounded transition-transform transform ${isActive ? "active" : ""}`
                }
              >
                <TagIcon className="h-5 w-5 inline-block mr-1" /> Category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `nav-link p-2 rounded transition-transform transform ${isActive ? "active" : ""}`
                }
              >
                <UserPlusIcon className="h-5 w-5 inline-block mr-1" /> Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-link p-2 rounded transition-transform transform ${isActive ? "active" : ""}`
                }
              >
                <UserIcon className="h-5 w-5 inline-block mr-1" /> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `nav-link p-2 rounded transition-transform transform ${isActive ? "active" : ""}`
                }
              >
                <GiShoppingBag className="h-5 w-5 inline-block mr-1" /> Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
