import React, { useState } from "react";
import "./Verification.css";
import Form from "../../Components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Verification = () => {
    const valuesIniciales = {
      email: "",
      password:""
    }
    const navigate = useNavigate();
    const [mostrarComponente, setMostrarComponente] = useState(false);
    const [values, setValues ] = useState(valuesIniciales)

    const contentVerification = [
      {
        id: 1,
        label: "email",
        type: "email",
        isLink: false,
        link: "#",
        anchor:"",
      },
      {
        id: 2,
        label: "password",
        type: "password",
        isLink: true,
        link: "",
        anchor:"Forgot your password?",
      }
    ]

    const datos_guardados = localStorage.getItem("formValues");
    const datosJSON = JSON.parse(datos_guardados);
    console.log(datosJSON.email)
    const handleClickVerify = (e) => {
      if(datosJSON.email !== values.email || datosJSON.password !== values.password){
        /* Swal.fire({
          title: "Credenciales inválidas",
          text: "😐",
          icon: "warning",
          showDenyButton: true,
          denyButtonText: "Volver",
          confirmButtonText: "Registrarme",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/register")
          } else if (result.isDenied) {
            navigate("/home")
          }
        }) */
          Swal.fire("Credenciales inválidas", "😐", 'warning')
          navigate("/")
      }
      else{
        Swal.fire("Me alegra que estés de vuelta", "😊", 'success')
        navigate("/home")
      }

    }

    

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
          <button onClick={() => setMostrarComponente(true)}>
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
            {/* <Form formContent={contentVerification} path={"/home"}></Form> */}
              <form
                action="
            "
              >
                <div className="">
                  <label htmlFor="">EMAIL</label>
                  <input type="email" name="email" id="email" value={values.email} onChange={(e) => setValues({...values, email: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="">PASSWORD</label>
                  <input type="password" name="password" id="password"  value={values.password} onChange={(e) => setValues({...values, password: e.target.value})}/>
                </div>
                <button type="submit" onClick={handleClickVerify}>Verify Account</button>
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Verification;
