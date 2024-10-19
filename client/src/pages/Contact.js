import React from 'react';

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons
import './Contact.css'; // Import custom CSS for styling
import Layout from '../components/Layouts/Layout';

const Contact = () => {
  return (
    <Layout title='Contact Us | Gadget Galaxy'>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-100"> {/* Adjusted for responsive layout */}
        <div className="flex-1 md:mr-6 mb-6 md:mb-0">
          <img 
            src="https://raw.githubusercontent.com/techinfo-youtube/ecommerce-app-2023/refs/heads/main/client/public/images/contactus.jpeg" 
            alt="Contact Us" 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
        <div className="flex-1 text-center md:text-left"> {/* Center text on mobile, left-align on larger screens */}
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg mb-4">If you have any questions or need assistance, feel free to reach out to us!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Responsive grid layout */}
            <div className="flex flex-col items-center">
              <a href="tel:+1234567890" className="flex flex-col items-center">
                <FaPhone size={30} className="text-blue-500 mb-2" />
                <h5 className="font-semibold">Phone</h5>
                <p>+1 234 567 890</p>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="mailto:info@example.com" className="flex flex-col items-center">
                <FaEnvelope size={30} className="text-blue-500 mb-2" />
                <h5 className="font-semibold">Email</h5>
                <p>info@example.com</p>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.google.com/maps?q=123+Main+St,+Anytown,+USA" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <FaMapMarkerAlt size={30} className="text-blue-500 mb-2" />
                <h5 className="font-semibold">Address</h5>
                <p>123 Main St, Anytown, USA</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
