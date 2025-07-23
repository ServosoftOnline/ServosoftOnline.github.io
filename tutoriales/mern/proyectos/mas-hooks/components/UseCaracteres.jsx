// COMPONENTE QUE PERMITE PONER A PRUEBA EL HOOK PERSONALIZADO useCaracteres

import useCaracteres from "../hooks/useCaracteres";

const UseCaracteres = () => {

    // Metodos de useCatacteres
    const {textoAModificar, mayusculas, minusculas, concatena, desconcatena} = useCaracteres("Hola mundo");    

    return (
        <>
            <h2>custom hook useCaracteres con métodos para modificar un texto</h2>
            <div>
                <strong>Texto : {textoAModificar}</strong>
            </div>

            <div className="botones">
                <button
                    onClick={() => mayusculas(textoAModificar)}
                    >Poner en mayúsculas
                </button>

                <button
                    onClick={() => minusculas(textoAModificar)}
                    >Poner en minusculas
                </button>

                <button
                    onClick={() => (concatena(textoAModificar, '- Bienvenido!!'))}
                    >Concatena Bienvenido
                </button>

                <button
                    onClick={() => desconcatena('- Bienvenido!!')}
                    >Deshacer Bienvenido
                </button>

            </div>
            
        </>
    );
}
 
export default UseCaracteres;