import React, { useState } from "react";

const Form = ({ formContent }) => {
    const initialStateForm = {
        email: "",
        password: "",
        display: "", 
        username: "",
      }

     const [formValues, setFormValues] = useState(initialStateForm)
     const handleChangeFormValue = (e) => setFormValues({...formValues, [e.target.name]: e.target.value})

    const handleFormSubmit = (e, valoresForm) => {
        e.preventDefault()
        localStorage.setItem("formValues", JSON.stringify(valoresForm))
    }
    
    
  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e, {...formValues})} >
        {formContent.map((item) => (
          <div className="row-form" key={item.id}>
            <label htmlFor={item.label}>{item.label}</label>
            <input type={item.type} name={item.label} id={item.label} value={formValues[item.label]} onChange={handleChangeFormValue}/>
          </div>
        ))}
      <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default Form;
