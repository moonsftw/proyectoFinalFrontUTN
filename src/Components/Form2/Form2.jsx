import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

const Form2 = () => {
  const { handleCreateUsuario } = useGlobalContext();
  return (
    <form onSubmit={handleCreateUsuario}>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form2;
