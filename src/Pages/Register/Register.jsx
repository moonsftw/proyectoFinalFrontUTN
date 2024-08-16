import React from "react";
import "./Register.css";
import Form from "../../Components/Form/Form";
import { Link } from "react-router-dom";
const Register = () => {
  const formContent = [
  {
    id:1,
    label: "email",
    type: "email",
  },
  {
    id:2,
    label: "display",
    type: "text",
  },
  {
    id:3,
    label: "username",
    type: "text",
  },
  {
    id:4,
    label: "password",
    type: "password",
  },
  ]

  return (
    <section className="container-register">
      <div className="img-logo-register">
        <Link to={"/"} className="img"><img src="/modernLogo.svg" alt="logo" /></Link>
      
      </div>
      <div className="container-form-register">

      <div
        className="container-form
      "
      >
        <h2>Create an account</h2>
        <Form formContent={formContent} path={"/"}/>
        <div className="inputCheck">
          <input type="checkbox" id="check" name="check" className="check" />
          <label htmlFor="check">
            I have read and agree to Discord's Terms of Service and Privacy
            Policy
          </label>
        </div>
        <div className="alreadyAccount">
          <Link to={"/login"} className="link-alreadyAccount">Already have an account?</Link>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Register;
