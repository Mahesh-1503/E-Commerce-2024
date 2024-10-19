import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length >= 6 && strongPasswordRegex.test(password)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Moderate");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        toast.success(data.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          address: "",
        });
        setPasswordStrength("");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Layout title="Register | Gadget Galaxy">
      <div className="registration-form-wrapper">
        {loading && (
          <div className="loading-overlay">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div className={`registration-form-container ${loading ? "blurred" : ""}`}>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <div className="password-input">
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="off"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="toggle-password"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {passwordStrength && (
                <Alert
                  variant={
                    passwordStrength === "Strong"
                      ? "success"
                      : passwordStrength === "Moderate"
                      ? "warning"
                      : "danger"
                  }
                >
                  Password Strength: {passwordStrength}
                </Alert>
              )}
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                autoComplete="off"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Register"}
            </Button>
          </Form>
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
