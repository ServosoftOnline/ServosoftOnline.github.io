/*
    MUESTRA UN CONTACTO

		- Hay un estado para saber cuando estamos editando el contacto
			- Por defecto no estamos editando la tarea
			- Si estamos editando tarea muestro un formulario que edita el contacto y el botón de actualizar
			- Si no estoy editando muestro el nombre y correo del contacto y los botones de editar y borrar
				- Si hago click en el boton de editar cambio el valor de true a false o de false a true (su contrario)



*/
import React, {useState} from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";

const Contacto = ({id, nombre, correo}) => {

	const [editandoTarea, cambiarEditandoTarea] = useState(false);

    return (
        <ContenedorContacto>
			{
				editandoTarea ?
					<form action="">
						<Input
							type="text"
							name="nombre"
							// value={nombre}
							// onChange={}
							placeholder={nombre}
						/>

						<Input
							type="mail"
							name="correo"
							// value={correo}
							// onChange={}
							placeholder={correo}
						/>

						<Boton type ="submit">Actualizar</Boton>

					</form>
					
				:
					<>
						<Nombre>{nombre}</Nombre>
						<Correo key ={id}>{correo}</Correo>
						<Boton onClick={() => cambiarEditandoTarea(!editandoTarea)}>Editar</Boton>
						<Boton>Borrar</Boton>
					</>

			}
            
        </ContenedorContacto>        
    );
}
 
// Estilos
const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

export default Contacto;

