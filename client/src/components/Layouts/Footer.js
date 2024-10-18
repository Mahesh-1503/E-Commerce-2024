import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../../index.css'; 

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="footer-logo text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Innovate TGS</h1>
          <p className="footer-copyright text-sm mt-1">All Rights Reserved &copy; {new Date().getFullYear()}</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
          <Link className="text-gray-300 hover:text-white mb-2 md:mb-0" to="/about">About</Link>
          <Link className="text-gray-300 hover:text-white mb-2 md:mb-0" to="/contact">Contact</Link>
          <Link className="text-gray-300 hover:text-white mb-2 md:mb-0" to="/policy">Privacy Policy</Link>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" className="text-gray-300 hover:text-white" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.twitter.com" className="text-gray-300 hover:text-white" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
