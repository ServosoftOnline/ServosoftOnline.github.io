/*
    VALIDAR CANTIDAD
    
        - Obtengo el formulario y su input con el id cantidad
        - Defino la expresion regular que valida un número entero con decimales opcionales
        - Si no cumple la expresion regular. Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes
            - Si la cumple le quito la clase para que deje de mostrar el error



*/

const formulario = document.getElementById('formulario');
const inputCantidad = formulario.cantidad;

const validarCantidad = () => {
    const enteroConDecimalesOpcionales = /^\d+(\.\d+)?$/;
        
    if(!enteroConDecimalesOpcionales.test(inputCantidad.value)){
        inputCantidad.classList.add('formulario__input--error');
        return false;

    } else {
        inputCantidad.classList.remove('formulario__input--error');
        return true;    
    }
    
};

export default validarCantidad;