import React from "react";
import "./index.css";
// import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      // input validation rules
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      } else if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: () => {
      // if there are no error messages
      if (Object.keys(formik.errors).length === 0) {
        alert("Login Successful");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Sign In</h2>
      <div>Email</div>
      <input
        type="text"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        id="emailField"
      ></input>
      {formik.errors.email ? (
        <div style={{ color: "red" }} id="emailError">
          {formik.errors.email}
        </div>
      ) : null}
      <div>Password</div>
      <input
        type="text"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        id="pswField"
      ></input>
      {formik.errors.password ? (
        <div style={{ color: "red" }} id="pswError">
          {formik.errors.password}
        </div>
      ) : null}
      <br></br>
      {/* <button type="click" onClick={}>
        Validate
      </button>
      <br></br>
      <br></br> */}
      <button type="submit" id="submitBtn">
        Submit
      </button>
    </form>
  );
}

export default App;
