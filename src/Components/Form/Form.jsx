import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({ formContent, path }) => {
  const initialStateForm = {
    email: "",
    password: "",
    display: "",
    username: "",
  };

  const [formValues, setFormValues] = useState(initialStateForm);
  const [inputs, setInputs] = useState(() => {
    const savedInputs = localStorage.getItem("inputs");
    return savedInputs ? JSON.parse(savedInputs) : [];
  });

  const navigation = useNavigate();

  const handleChangeFormValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmitLogin = (e) => {
    e.preventDefault();
    const email = formValues.email;

    if (inputs.includes(email)) {
      navigation(path)
    } else {
      alert("Email no registrado"); 
    }
  }
  const handleFormSubmitRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("formValues", JSON.stringify(formValues));

    const email = formValues.email;

    if (inputs.includes(email)) {
      alert("Email ya registrado");
    } else {
      const newInputs = [...inputs, email];
      setInputs(newInputs);
      localStorage.setItem("inputs", JSON.stringify(newInputs));
      navigation(path);
    }
  };

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
    console.log("Inputs guardados en localStorage:", inputs);
  }, [inputs]);

  const handleError = (label) => {
    const condition =
      formValues[label].length > 0 && formValues[label].length < 5;
    return condition;
  };

  return (
    <form className="formContainer" onSubmit={path === "/" ? handleFormSubmitRegister : handleFormSubmitLogin}>
      {formContent.map(({ type, label, id }) => (
        <div className="inputForm" key={id}>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            name={label}
            id={label}
            value={formValues[label]}
            onChange={handleChangeFormValue}
            required
            minLength={5}
            maxLength={30}
          />
          {handleError(label) && (
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
      <button type="submit">Continue</button>
    </form>
  );
};

export default Form;
