import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <section className="container-register">
      <div className="img-logo-register">
        <img src="/modernLogo.svg" alt="" />
      </div>
      <div className="container-form-register">

      <div
        className="container-form
      "
      >
        <h2>Create an account</h2>
        <form action="">
          <div>
            <label htmlFor="">EMAIL</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">DISPLAY NAME</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">USERNAME</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">PASSWORD</label>
            <input type="text" />
          </div>
          <button>Continue</button>
        </form>
        <div className="inputCheck">
          <input type="checkbox" id="check" name="check" className="check" />
          <label htmlFor="check">
            I have read and agree to Discord's Terms of Service and Privacy
            Policy
          </label>
        </div>
        <div className="alreadyAccount">
          <a href="">Already have an account?</a>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Register;
