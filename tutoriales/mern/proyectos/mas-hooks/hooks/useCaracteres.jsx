// HOOK PERSONALIZADO PARA REALIZAR MODIFICACIONES EN CARACTERES
// Transforma una cadena en todos los caracteres en mayúsuculas, en minúsculas
// Concatena y elimina dicha concatenación

import { useState } from "react";
const useCaracteres = (texto) => {

    // Estado que contendrá el texto a modificar
    const [textoAModificar, setTextoAModificar] = useState(texto);

    // Método mayusculas
    const mayusculas = (textoAModificar) => {        
        setTextoAModificar(textoAModificar.toUpperCase());
    }

    // Metodo para pasar todo a minusculas
    const minusculas = textoAModificar => {
        setTextoAModificar(textoAModificar.toLowerCase());

    }

    // Metodo para concatenar
    const concatena = (textoAModificar, textoAñadido) => {
        setTextoAModificar(textoAModificar + textoAñadido);
    }

    // Metodo para deshacer una concatenación específica
    const desconcatena = (textoEliminado) => {
        const textoActual = textoAModificar;
        const textoFinal = textoActual.slice(-textoEliminado.length);

        if (textoFinal.toLowerCase() === textoEliminado.toLowerCase()) {
            setTextoAModificar(textoActual.slice(0, -textoEliminado.length));
        }
    }

    // Devuelvo un objeto con los metodos. Al importarlos debo desectructurar el que desee 
    return {
        textoAModificar,
        mayusculas,
        minusculas,
        concatena,
        desconcatena
    };
    
}
 
export default useCaracteres;