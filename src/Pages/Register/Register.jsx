import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <section className="container-register">
      <img src="/modernLogo.svg" alt="" />
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
        <input type="checkbox" />
        <label htmlFor="">
          I have read and agree to Discord's Terms of Service and Privacy Policy
        </label>
      </div>
      <div className="alreadyAccount">
        <a href="">Already have an account?</a>
      </div>
    </section>
  );
};

export default Register;
