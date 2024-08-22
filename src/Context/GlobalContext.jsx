import { createContext, useContext, useEffect, useState } from "react";
import { handleCreateUsuario } from "./../Helpers/form";
import { DISCORD_SERVERS as servers } from "./../Data";

/* import {handleChangeSearchTerm} from './../Helpers/serversFn' */

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const obtenerServerId = (id) => {
    return servers.find((server) => Number(server.id) === Number(id));
  };

  return (
    <GlobalContext.Provider
      value={{
        obtenerServerId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
