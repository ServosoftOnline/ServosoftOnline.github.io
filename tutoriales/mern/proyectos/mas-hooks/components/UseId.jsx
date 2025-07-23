// COMPONENTE QUE GENERA UN IDENTIFICADOR UNICO DE FORMA AUTOMÁTICA
import { useId } from "react";

const UseId = () => {

    const id = useId();
    return (
        <>
            <h2>UseId: Proporciona un identificador único que puedo enviar al backend</h2>
            <p>Identificador único proporcionado por useId: {id}</p>
            <p>Muy util en formularios donde queremos enviar información al backend </p>
        </>
    );
}
    
export default UseId;
