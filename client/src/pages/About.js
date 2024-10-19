import React from "react";
import Layout from '../components/Layouts/Layout';
import { FaRocket, FaRegHeart, FaShoppingCart, FaUsers, FaShieldAlt, FaStar, FaHandsHelping, FaCog, FaLightbulb, FaThumbsUp, FaShoppingBag, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <Layout title='About Us | Gadget Galaxy'>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
        <div className="mb-6 flex justify-center w-full">
          <img
            src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?t=st=1729303861~exp=1729307461~hmac=6fbd0c3cf2e6035e6c1e892ad942cbde103cfd9851a0cc1d3a91845fe985a20d&w=996"
            alt="Gadget Galaxy"
            className="w-full max-w-md h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex-1 text-center md:text-left flex flex-col justify-center w-full max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-blue-700">About Us</h1>
          <p className="text-lg mb-6 text-gray-800">
            Welcome to <strong className="text-green-600">Gadget Galaxy</strong>!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: <FaRocket className="text-4xl text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Innovative Technology" },
              { icon: <FaRegHeart className="text-4xl text-red-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Customer Satisfaction" },
              { icon: <FaShoppingCart className="text-4xl text-green-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Quality Products" },
              { icon: <FaUsers className="text-4xl text-purple-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Community Focused" },
              { icon: <FaShieldAlt className="text-4xl text-yellow-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Secure Shopping" },
              { icon: <FaStar className="text-4xl text-orange-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Top Rated" },
              { icon: <FaHandsHelping className="text-4xl text-teal-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Supportive Team" },
              { icon: <FaCog className="text-4xl text-gray-600 cursor-pointer hover:scale-110 transition-transform duration-300" />, text: "Custom Solutions" },
            ].map((item, index) => (
              <div key={index} className="relative flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {item.icon}
                <span className="text-md ml-4 text-gray-800 relative z-10">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { text: "We are passionate about bringing the latest and greatest in technology right to your doorstep. Our mission is to provide you with cutting-edge gadgets, from smart devices to innovative tech solutions, that elevate your everyday experiences.", icon: <FaLightbulb className="inline-block text-blue-500 mr-2 text-4xl" /> },
              { text: "With a focus on quality, reliability, and customer satisfaction, we strive to be your go-to destination for all things tech.", icon: <FaThumbsUp className="inline-block text-green-500 mr-2 text-4xl" /> },
              { text: "At Gadget Galaxy, we believe in making the future accessible today. Explore our collection and discover the perfect gadget that suits your needs and lifestyle. Happy shopping!", icon: <FaShoppingBag className="inline-block text-orange-500 mr-2 text-4xl" /> },
              { text: "Thank you for choosing Gadget Galaxy—your satisfaction is our priority!", icon: <FaGlobe className="inline-block text-teal-500 mr-2 text-4xl" /> }
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {item.icon}
                <p className="text-md text-gray-700 flex-grow text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
