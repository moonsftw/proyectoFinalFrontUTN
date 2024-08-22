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
  const inputsGuardados = JSON.parse(localStorage.getItem("inputs")) || [];
  const [inputs, setInputs] = useState(inputsGuardados);
  const [formValues, setFormValues] = useState(initialStateForm);

  const navigation = useNavigate();

  const handleChangeFormValue = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleFormSubmit = (e, valoresForm) => {
    e.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(valoresForm));
    const formulario = e.target;
    const formularioValores = new FormData(formulario);
    const nombre = formularioValores.get("email");
    if (inputs.includes(formularioValores.get("email"))) {
      alert("email ya registrado");
    } else {
      setInputs([...inputs, nombre]);
      formulario.reset();
      alert("email registrado con exito");
    }
  };
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);
  const handleError = ({ label }) => {
    const condicion =
      formValues[label].length > 0 && formValues[label].length < 5;
    /* setIsDisabled(...isDisabled, [condicion]); */
    return condicion;
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
              required
              minLength={5}
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
        <button type="submit">
          Continue
        </button>
      </form>
    </>
  );
};

export default Form;
