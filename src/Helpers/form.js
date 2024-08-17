export const handleCreateUsuario = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const formularioValores = new FormData(formulario);
    const formEsquema = {
        email: "",
        password:"",
    }
    for(let propiedad in formEsquema){
        formEsquema[propiedad] = formularioValores.get(propiedad);
    }
    console.log(formEsquema)
}