import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div>
        <img className="img1" src="/images/Ellipse 2718.png" alt="" />
        <img className="img2" src="/images/Ellipse 2721.png" alt="" />
      </div>

      <div className="login-form">
        <form>
          <h4 className="modal-title">Welcome back, Ouly.AI</h4>
          <p>Welcome! please enter your details.</p>
          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                required="required"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="EnterLast Name"
                required="required"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ouly12@gmail.com"
              required="required"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mobile No</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile No"
              required="required"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder=".........."
              required="required"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary text-white" type="button">
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center small">
          Already have an account? <Link to="/">Sign in</Link>
        </div>
      </div>

      <div>
        <img className="img4" src="/images/Group 1000002089.png" alt="" />
      </div>
    </>
  );
};

export default SignUp;
