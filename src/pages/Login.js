import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  return (
    <>
      <img className="img1" alt="" src="/images/Ellipse 2718.png" />
      <img className="img2" alt="" src="/images/Ellipse 2721.png" />
      <img className="img4" alt="" src="/images/Group 1000002089.png" />
      <div className="login-form-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h4 className="modal-title">Welcome back, Ouly.AI</h4>
            <p>Welcome back! please enter your details.</p>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ouly12@gmail.com"
                required="required"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="..........."
                required="required"
              />
            </div>
            <div className="form-group small clearfix">
              <label className="checkbox-inline">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="#" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary text-white" type="submit">
                Log in
              </button>
            </div>
          </form>
          <div className="text-center small">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;