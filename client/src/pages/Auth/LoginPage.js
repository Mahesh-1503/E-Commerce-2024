import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        navigate("/"); 
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Layout title="Login | Gadget Galaxy">
      <div className="login-form-wrapper">
        {loading && (
          <div className="loading-overlay">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div className={`login-form-container ${loading ? "blurred" : ""}`}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Login"}
            </Button>
          </Form>
          <div className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
