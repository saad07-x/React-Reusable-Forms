import React, { useState, useEffect } from "react";
import Form from "../components/Forms/Reusable/Form";
import t from "../templates/forms/jobTemplate.json";

function JobForm(props) {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(t);
  });

  return (
    <Form
      template={t}
      watchFields={["firstname", "include_portfolio"]}
      validate={validate}
      onSubmit={onSubmit}
    />
  );
}

function onSubmit(values) {
  console.log(values);
}

function validate(watchValues, errorMethods) {
  let { errors, setError, clearErrors } = errorMethods;

  // Firstname validation
  if (watchValues["firstname"] === "Admin") {
    if (!errors["firstname"]) {
      setError("firstname", {
        type: "manual",
        message: "You cannot use this first name",
      });
    }
  } else {
    if (errors["firstname"] && errors["firstname"]["type"] === "manual") {
      clearErrors("firstname");
    }
  }
}

export default JobForm;
