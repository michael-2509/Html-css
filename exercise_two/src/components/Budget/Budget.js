import React from "react";
import { Formik } from "formik";

const Budget = () => {
  return (
    <div className="mx-auto max-w-3xl my-8 px-5 py-5 bg-white rounded-lg shadow-md">
      <h2 className="text-gray-700 font-bold text-lg mb-5 ">
        Personal Budget Dashboard
      </h2>
      <Formik
        initialValues={{ transactionTitle: "", amount: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.transactionTitle) {
            errors.transactionTitle = "Required";
          }
          if (values.amount <= 0) {
            errors.amount = "Cannot be less than zero";
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="transactionTitle"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.transactionTitle}
              className=" px-2.5 mr-2.5 border border-gray-300 rounded text-lg"
            />
            {errors.transactionTitle &&
              touched.transactionTitle &&
              errors.transactionTitle}
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              className=" px-2.5 mr-2.5 border border-gray-300 rounded text-lg"
            />
            {errors.amount && touched.amount && errors.amount}
            <button
              type="submit"
              disabled={true}
              className=" px-2.5 mr-2.5 border border-gray-300 rounded text-lg bg-green-600 text-white border-none cursor-pointer hover:bg-green-500"
            >
              Add Transaction
            </button>

            <ul className="transaction-list list-none p-0 mt-6 ">
              <li className="transaction-list bg-gray-200 border border-gray-300 px-2.5 mb-2.5 rounded flex justify-between items-center">
                <p>{values.transactionTitle}</p> <p>{values.amount}</p>
              </li>
            </ul>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Budget;
