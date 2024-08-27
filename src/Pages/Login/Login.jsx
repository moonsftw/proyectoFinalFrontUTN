import React from "react";
import "./Login.css";
import Form from "@/Components/Form/Form";
import { Link } from "react-router-dom";
const Login = () => {
  
  const contentLogin = [
    {
      id: 1,
      label: "email",
      type: "email",
      isLink: false,
      link: "#",
      anchor: "",
    },
    {
      id: 2,
      label: "password",
      type: "password",
      isLink: true,
      link: "",
      anchor: "Forgot your password?",
    },
  ];

  return (
    <section className="container-login">
      <div className="img-logo-login">
        <Link to={"/"} className="img">
          <img src="/modernLogo.svg" alt="logo" />
        </Link>
      </div>
      <div className="container-form-login">
        <div
          className="container-form
      "
        >
          <div className="welcomeBack">
            <h2>Welcome Back!</h2>
            <p>We're so excited to see you again!</p>
          </div>
          <Form formContent={contentLogin} path={"/home"} />
          <div className="needAccount">
            <p>Need an account?</p>
            <Link to={"/register"} className="link-register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
