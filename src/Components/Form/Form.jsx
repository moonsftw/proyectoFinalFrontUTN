import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({ formContent, path }) => {
  const initialStateForm = {
    email: "",
    password: "",
    display: "",
    username: "",
  };
  const navigation = useNavigate();
  const [formValues, setFormValues] = useState(initialStateForm);
  const handleChangeFormValue = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleFormSubmit = (e, valoresForm) => {
    e.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(valoresForm));
    navigation(path);
  };

  const handleError = ({ label }) => {
    return formValues[label].length > 0 && formValues[label].length < 5;
  };

  return (
    <>
      <form
        className="formContainer"
        onSubmit={(e) => handleFormSubmit(e, { ...formValues })}
      >
        {formContent.map(({ type, label, id }) => (
          <div className="inputForm" key={id}>
            <label htmlFor={label}>{label}</label>
            <input
              type={type}
              name={label}
              id={label}
              value={formValues[label]}
              onChange={handleChangeFormValue}
              onBlur={() => handleError({ label })}
              required
              minLength={4}
              maxLength={30}
            />
            {handleError({ label }) && (
              <p
                style={{ color: "#C23854", fontSize: "12px", padding: "0px" }}
                className="error"
              >
                Must be at least 5 characters
              </p>
            )}
          </div>
        ))}
        {path === "/" && (
          <section className="inputCheck">
            <input
              required
              type="checkbox"
              id="check"
              name="check"
              className="check"
            />
            <label htmlFor="check">
              I have read and agree to Discord's Terms of Service and Privacy
              Policy
            </label>
          </section>
        )}
        <button disabled={false} type="submit">
          Continue
        </button>
      </form>
    </>
  );
};

export default Form;
