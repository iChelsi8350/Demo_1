import { Formik } from "formik";
import React from "react";
import { Button, FormControl, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();

  const ValidationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is Required"),
    lastname: Yup.string().required("Last Name is Required"),
    email: Yup.string().email().required("Email Required"),
    mobileno: Yup.number().required("Mobile Number is Required"),
    password: Yup.string()
      .required("Password Required")
      .min(8, "Password is Too short")
      .matches(/(?=.*[0-9])/, "Must Contain Number"),
  });

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     navigate("/");
  //   };

  return (
    <>
      <div>
        <Image className="img1" src="/images/Ellipse 2718.png" alt="" />
        <Image className="img2" src="/images/Ellipse 2721.png" alt="" />
      </div>

      <div className="login-form">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            mobileno: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            navigate("/");
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
                <p>Welcome! please enter your details.</p>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      name="firstname"
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstname && touched.firstname && (
                      <div className="input feedback error">
                        {errors.firstname}
                      </div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="EnterLast Name"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastname && touched.lastname && (
                      <div className="input feedback error">
                        {errors.lastname}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Ouly12@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input feedback error">{errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile No</label>
                  <input
                    name="mobileno"
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile No"
                    value={values.mobileno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobileno && touched.mobileno && (
                    <div className="input feedback error">
                      {errors.mobileno}
                    </div>
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

                <div className="d-grid gap-2">
                  <Button
                    as="input"
                    variant="primary"
                    className="text-white"
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>
            );
          }}
        </Formik>
        <div className="text-center small">
          Already have an account? <Link to="/">Sign in</Link>
        </div>
      </div>

      <div>
        <Image className="img4" src="/images/Group 1000002089.png" alt="" />
      </div>
    </>
  );
};

export default SignUp;
