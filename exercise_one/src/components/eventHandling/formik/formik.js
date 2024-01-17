import React from "react";
import { Formik } from "formik";

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "First Name required";
        } else if (!values.lastName) {
          errors.lastName = "lastname is required";
        } else if (values.password !== values.confirmPassword) {
          errors.password = "Password do not march";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label style={{ fontWeight: "400", textAlign: "center" }}>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <p style={{ color: "red", fontSize: "10px", margin: "0" }}>
            {errors.firstName && touched.firstName && errors.firstName}
          </p>
          <label style={{ fontWeight: "400", textAlign: "center" }}>
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <p style={{ color: "red", fontSize: "10px", margin: "0" }}>
            {errors.lastName && touched.lastName && errors.lastName}
          </p>
          <label style={{ fontWeight: "400", textAlign: "center" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p style={{ color: "red", fontSize: "10px", margin: "0" }}>
            {errors.password && touched.password && errors.password}
          </p>
          <label style={{ fontWeight: "400", textAlign: "center" }}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <p style={{ color: "red", fontSize: "10px", margin: "0" }}>
            {errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword}
          </p>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
