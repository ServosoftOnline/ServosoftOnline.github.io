/*
    VALIDAR CORREO ELECTRONICO
    
        - Obtengo el formulario y su input con el id correo-receptor
        - Defino la expresion regular para un correo electrónico                

        - Si no cumple la expresion regular.
            - Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes

        - Si la cumple
            - Le quito la clase para que deje de mostrar el error

*/

const formulario = document.getElementById('formulario');
const inputCorreo = formulario['correo-receptor'];

const validarCorreo = () => {
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!expresionCorreo.test(inputCorreo.value)){
        inputCorreo.classList.add('formulario__input--error');
        return false;

    } else {
        inputCorreo.classList.remove('formulario__input--error');
        return true;    
    }
    
};

export default validarCorreo;