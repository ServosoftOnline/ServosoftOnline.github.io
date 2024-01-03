// CONTIENE LOS ESTILOS DEL MENSAJE DEL RESULTADO DE LA OPERACION DE INSERTAR DATOS EN FIRESTORE
// Mas adelante veré como cambiar el color a rojo cuando falle el insertar datos

import styled from "styled-components";

const ResultadoOperacion = styled.p`
	padding: 10px 30px;
	color: green;
	font-size: 12px;
`;
     
export default ResultadoOperacion;