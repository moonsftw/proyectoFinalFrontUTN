import { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const handleCreateUsuario = (e) => {
        e.preventDefault();
        const formulario = e.target;
        console.log(e.target)
    }
    return (
        <GlobalContext.Provider value={{handleCreateUsuario}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}