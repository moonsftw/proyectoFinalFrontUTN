import React, { useState } from "react";
import "./Verification.css";
const Verification = () => {
    const [mostrarComponente, setMostrarComponente] = useState(false);

  return (
    <div className="container">
      <section className={!mostrarComponente ? "verificationRequired" : "no-display"}>
        <div className="image-castillo">
          {/*   <img src="./castillo.svg" alt="" /> */}
        </div>
        <div className="title-verificationRequired">Verification Required</div>
        <div className="body-verificationRequired">
          We've detected something out of the ordinary going on, and we want to
          keep you and the community safe. To continue using Discord,{" "}
          <strong>we will need you to verify your account. </strong>
          <a href="#">Learn More</a>
        </div>
        <div className="button-verificationRequired">
          <button onClick={() => setMostrarComponente(!mostrarComponente)}>
            Verify by Email
          </button>
        </div>
      </section>
      <section className={mostrarComponente ? "verification" : "no-display"}>
        {mostrarComponente && (
          <>
            <div className="containerVerification">
              <div className="text-verification">
                <h2 className="title-verification">Verify by Email</h2>
                <p className="body-verification">
                  In order to verify your email address, you must first enter an
                  email address.
                </p>
              </div>

              <form
                action="
            "
              >
                <div className="">
                  <label htmlFor="">EMAIL</label>
                  <input type="email" />
                </div>
                <div>
                  <label htmlFor="">PASSWORD</label>
                  <input type="password" />
                </div>
              </form>
              <button>Verify Account</button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Verification;
