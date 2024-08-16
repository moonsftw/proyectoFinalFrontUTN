import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ formContent, path }) => {
  const initialStateForm = {
    email: "",
    password: "",
    display: "",
    username: "",
  };
  const navigation = useNavigate()
  const [formValues, setFormValues] = useState(initialStateForm);
  const handleChangeFormValue = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleFormSubmit = (e, valoresForm) => {
    e.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(valoresForm));
    navigation(path)
  };
  
  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e, { ...formValues })}>
        {formContent.map((item) => (
          <div className="row-form" key={item.id}>
            <label htmlFor={item.label}>{item.label}</label>
            <input
              type={item.type}
              name={item.label}
              id={item.label}
              value={formValues[item.label]}
              onChange={handleChangeFormValue}
            />
          </div>
        ))}
        <button type="submit">Continue</button>
      </form>
    </>
  );
};


export default Form;
