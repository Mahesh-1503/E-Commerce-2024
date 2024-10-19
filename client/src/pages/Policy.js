import React from 'react';
import Layout from '../components/Layouts/Layout';
import { FaShieldAlt, FaUserShield, FaCookie, FaRegHandshake, FaInfoCircle, FaFileContract, FaRegEdit, FaPhoneAlt } from 'react-icons/fa';
import './Policy.css';

const Policy = () => {
  return (
    <Layout title='Privacy Policy | Gadget Galaxy'>
      <div className="privacy-policy-container">
        <div className="intro-container">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            Welcome to Gadget Galaxy! This Privacy Policy explains how we collect,
            use, and protect your information when you visit our website.
          </p>
        </div>

        <div className="policy-grid">
          <div className="policy-section">
            <FaShieldAlt className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information when you use our services:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Payment information for orders made through our website</li>
              <li>Data about your interactions with our website, including IP address, browser type, and access times</li>
            </ul>
          </div>

          <div className="policy-section">
            <FaInfoCircle className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Process transactions and manage orders</li>
              <li>Improve customer service and support</li>
              <li>Send promotional emails and updates about our products and services</li>
              <li>Personalize your experience on our website</li>
            </ul>
          </div>

          <div className="policy-section">
            <FaUserShield className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">3. How We Protect Your Information</h2>
            <p className="mb-4">
              We implement a variety of security measures to protect your personal information. These include secure servers, data encryption, and restricted access to your data. However, please note that no method of data transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="policy-section">
            <FaRegHandshake className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except as required for fulfilling your orders or by law. We may share information with trusted partners who assist us in operating our website and conducting our business.
            </p>
          </div>

          <div className="policy-section">
            <FaCookie className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">5. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us analyze website traffic and customize content. You can disable cookies through your browser settings if you prefer, but it may affect your ability to use some features of our website.
            </p>
          </div>

          <div className="policy-section">
            <FaFileContract className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, and delete your personal information. If you wish to exercise these rights, please contact us at support@gadgetgalaxy.com.
            </p>
          </div>

          <div className="policy-section">
            <FaRegEdit className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div className="policy-section">
            <FaPhoneAlt className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              Email: support@gadgetgalaxy.com
              <br />
              Address: 123 Gadget Street, Tech City, 45678
            </p>
          </div>

          <div className="policy-section">
            <FaRegEdit className="policy-icon" />
            <h2 className="text-3xl font-semibold mb-2">9. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We do not control these websites and are not responsible for their content or privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>
        </div>

        <p className="consent-text mb-4">
          By using our website, you consent to the terms of this Privacy Policy.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
