import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import {Helmet} from 'react-helmet';

const Layout = ({ children, title, description, keywords}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Gadget Galaxy',
  description: 'Mern Stack Project',
  keywords: 'mern, react, node, mongodb, express',
};

export default Layout;
