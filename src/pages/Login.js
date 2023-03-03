import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Image } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email Required"),
    password: Yup.string()
      .required("Password Required")
      .min(8, "Password is Too short")
      .matches(/(?=.*[0-9])/, "Must Contain Number"),
  });

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     navigate("/signup");
  //   };

  return (
    <>
      <Image className="img1" alt="" src="/images/Ellipse 2718.png" />
      <Image className="img2" alt="" src="/images/Ellipse 2721.png" />
      <Image className="img4" alt="" src="/images/Group 1000002089.png" />
      <div className="login-form-container">
        <div className="login-form">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigate("/signup");
            }}
            validationSchema={ValidationSchema}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <h4 className="modal-title">Welcome back, Ouly.AI</h4>
                  <p>Welcome back! please enter your details.</p>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="ouly12@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.email && touched.email && (
                      <div className="input feedback error">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="..........."
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div className="input feedback error">
                        {errors.password}
                      </div>
                    )}
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
                    <Button
                      as="input"
                      variant="primary"
                      className="text-white"
                      type="submit"
                      value="Log in"
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
          <div className="text-center small">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
