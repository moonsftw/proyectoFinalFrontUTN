import React, { useEffect, useState } from "react";

const Probando = () => {
const inputsGuardados = JSON.parse(localStorage.getItem("inputs")) || [];
  const [inputs, setInputs] = useState(inputsGuardados);
  
  const handleInputProbando = (e) => {
    e.preventDefault();
    const formulario = e.target;
    console.log(formulario);
    const formularioValores = new FormData(formulario);
    const nombre = formularioValores.get("name");
    if(inputs.includes(formularioValores.get("name")) ){
        alert('email registrado')
    } else{
        setInputs([...inputs, nombre]);
        formulario.reset();

    }
  };
  useEffect(() => {
      
      localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs])

 

  return (
    <div>
      <form onSubmit={handleInputProbando}>
        <label htmlFor="">Nombre</label>
        <input type="text" name="name" id="name" />
        <button>Guardar Local</button>
      </form>
    </div>
  );
};

export default Probando;
