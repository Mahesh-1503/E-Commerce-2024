import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../../index.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-2 text-center md:text-left m-0 border-0"> {/* Changed to footer */}
      <blockquote className="blockquote">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="footer-logo mb-1 md:mb-0">
            <h1 className="text-lg font-bold">Gadget Galaxy</h1>
            <p className="footer-copyright text-xs mt-1">All Rights Reserved &copy; {new Date().getFullYear()}</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
            <Link className="text-gray-300 hover:text-white mb-1 md:mb-0" to="/About">About</Link>
            <Link className="text-gray-300 hover:text-white mb-1 md:mb-0" to="/Contact">Contact</Link>
            <Link className="text-gray-300 hover:text-white mb-1 md:mb-0" to="/Policy">Privacy Policy</Link>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social flex space-x-3 mt-1 md:mt-0">
            <a href="https://www.facebook.com" className="text-gray-300 hover:text-white" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-gray-300 hover:text-white" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </blockquote>
      <figcaption className="blockquote-footer">
        <p>Footer content aligned responsively.</p>
      </figcaption>
    </footer>
  );
};

export default Footer;
