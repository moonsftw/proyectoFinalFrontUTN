import React, { useState } from "react";
import "./Verification.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "@/index.css"
const Verification = () => {
  const valuesIniciales = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [values, setValues] = useState(valuesIniciales);

  const datos_guardados = localStorage.getItem("formValues");
  const datosJSON = JSON.parse(datos_guardados);

  const handleClickVerify = (e) => {
    if (
      datosJSON.email !== values.email ||
      datosJSON.password !== values.password
    ) {
      Swal.fire("Credenciales inválidas", "😐", "warning");
      navigate("/");
    } else {
      Swal.fire("Me alegra que estés de vuelta", "😊", "success");
      navigate("/home");
    }
  };

  return (
    <div >
      <section
        className={!mostrarComponente ? "verificationRequired" : "no-display"}
      >
        <div className="image-castillo"></div>
        <div className="title-verificationRequired">Verification Required</div>
        <div className="body-verificationRequired">
          We've detected something out of the ordinary going on, and we want to
          keep you and the community safe. To continue using Discord,{" "}
          <strong>we will need you to verify your account. </strong>
          <a href="#">Learn More</a>
        </div>
        <div className="button-verificationRequired">
          <button onClick={() => setMostrarComponente(true)}>
            Verify by Email
          </button>
          <button onClick={() => navigate("/register")}>Sign Up</button>
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
                <div className="form-verification">
                  <label htmlFor="">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-verification">
                  <label htmlFor="">PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </div>
                <button type="submit" onClick={handleClickVerify}>
                  Verify Account
                </button>
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Verification;
