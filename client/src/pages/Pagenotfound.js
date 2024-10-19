import React from "react";
import Layout from "../components/Layouts/Layout";
const PageNotFound = () => {
  return (
    <Layout
      title="Page Not Found | Gadget Galaxy"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6"
    >
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="text-md mb-4">
        It might have been removed, or you may have entered the wrong URL.
      </p>
      <a
        href="/"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Go Back to Home
      </a>
      <img
        src="https://cdn.vectorstock.com/i/1000v/89/33/404-error-page-not-found-template-with-traffic-vector-25988933.avif"
        alt="Not Found"
        className="mt-6 w-full max-w-md rounded-lg shadow-md"
      />
      </div>
    </Layout>
  );
};

export default PageNotFound;
