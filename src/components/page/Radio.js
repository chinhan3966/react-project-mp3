import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ref } from "yup";
const Radio = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(4, "Must be 4  characters or more"),
      lastName: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
      window.alert("Success Form");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border max-w-[60%] mx-auto mt-4 p-3"
    >
      <div>
        <label htmlFor="firstName" className="block mt-2">
          First Name
        </label>
        <input
          className="inputCustom"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <span className="block mt-2 error ">{formik.errors.firstName}</span>
      </div>
      <div>
        <label htmlFor="lastName" className="block mt-2">
          Last Name
        </label>
        <input
          className="inputCustom"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <span className="block mt-2 error ">{formik.errors.lastName}</span>
      </div>
      <div>
        <label htmlFor="password" className="block mt-2">
          Password
        </label>
        <input
          className="inputCustom"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <span className="block mt-2 error ">{formik.errors.password}</span>
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mt-2">
          Password
        </label>
        <input
          className="inputCustom"
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <span className="block mt-2 error ">
          {formik.errors.confirmPassword}
        </span>
      </div>
      <div>
        <label htmlFor="email" className="block mt-2">
          Email Address
        </label>
        <input
          className="inputCustom"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span className="block mt-2 error ">{formik.errors.email}</span>
      </div>
      <button type="submit" className="block mt-3 border px-4 py-2 mx-auto">
        Submit
      </button>
    </form>
  );
};

export default Radio;
