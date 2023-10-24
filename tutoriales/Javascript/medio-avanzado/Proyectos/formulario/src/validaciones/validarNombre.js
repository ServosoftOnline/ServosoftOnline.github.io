/*
    VALIDAR NOMBRE
    
        - Obtengo el formulario y su input con el id cantidad
        - Defino la expresion regular
            - Valida un nombre con minúsculas, mayúsculas y tildes. Maximo de 40 caracteres

        - Si no cumple la expresion regular.
            - Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes

        - Si la cumple
            - Le quito la clase para que deje de mostrar el error

*/

const formulario = document.getElementById('formulario');
const inputNombre = formulario['nombre-receptor'];

const validarNombre = () => {
    const expresionNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if(!expresionNombre.test(inputNombre.value)){
        inputNombre.classList.add('formulario__input--error');
        return false;

    } else {
        inputNombre.classList.remove('formulario__input--error');
        return true;    
    }
    
};

export default validarNombre;