import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <section className="container-login">
      <div className="img-logo-login">
        <img src="/modernLogo.svg" alt="" />
      </div>
      <div className="container-form-login">

      <div
        className="container-form
      "
      >
        <div className='welcomeBack'>

        <h2>Welcome Back!</h2>
        <p>We're so excited to see you again!</p>
        </div>
        <form action="">
          <div>
            <label htmlFor="">EMAIL</label>
            <input type="text" />
          </div>
       
          <div>
            <label htmlFor="">PASSWORD</label>
            <input type="text" />
          <a href="">Forgot your password?</a>
          </div>
          <button>Continue</button>
        </form>
        
        <div className="needAccount">
          <p>Need an account?</p>
          <a href="">Register</a>
        </div>
      </div>
      
      </div>
    </section>
  )
}

export default Login