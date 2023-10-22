/*
    VALIDAR CANTIDAD
    
        - Los argumentos son el formulario entero y las teclas que he ido pulsando y levantando
        - Defino la expresion regular que valida un número entero con decimales opcionales
        - Si no cumple la expresion regular. Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes
            - Si la cumple le quito la clase para que deje de mostrar el error



*/



const validarCantidad = (formulario, teclasLevantadas) => {
    const enteroConDecimalesOpcionales = /^\d+(\.\d+)?$/;
    console.log(teclasLevantadas);
    if(!enteroConDecimalesOpcionales.test(teclasLevantadas)){
        formulario.cantidad.classList.add('formulario__input--error');
        return false;
    } else {
        formulario.cantidad.classList.remove('formulario__input--error');
        return true;    
    }
    



}
export default validarCantidad;