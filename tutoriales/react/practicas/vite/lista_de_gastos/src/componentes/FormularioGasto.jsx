/*
    FORMULARIO DEL COMPONENTE PPAL PARA AÑADIR GASTOS
        - Importo lo necesario

        - Creo el componente
            - los estados:
                - un estado por cada input
                - Un estado para almacenar los mensajes de error en las validaciones
                - Un estado donde almacenaremos la categoria seleccionada en el select
                    - La pasaré como propiedad al componente SelectCategorias
                - Un estado con el momento actual por defecto
                    - La pasaré como propiedad al componente DatePicker

            - las funciones:
                - handleSubmit para validar lo que envio el formulario
                - handleChange para ir modificando los estados de los inputs
        
            - Devuelve:
                - Los filtros:  
                    - Un elemento que mostrará un select con todas las categorias
                        - Le paso el estado categoria y la funcion que lo cambia
                        - Para cuando actualice su estado actualize tambien el select
                    - Un elemento que mostrará el date picker

                - Los inputs:
                    - Para la descripción del gasto
                    - Para el importe. Esté mostrará la fuente mas grande

                - El boton que enviará los inputs del formulario
                    - Tiene un contenedor que lo centra
                    - El botón:
                        - Se comportará como boton y no como enlace
                        - Tendrá la propiedades
                            - primario para que cambie el color
                            - con icono para que sea mas grande
                        - Añado el icono que fue creado como elemento

                - El mensaje de error en la validación si llegara a producirse

*/

// React 
import React, {useState} from "react";

// Elementos
import{ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componentes
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import Mensaje from "./Mensaje";

// Svg como componente
import IconoPlus from './../assets/plus.svg?react';

// Contexto
import { useAuth } from "../contextos/AuthContext";

// Funciones
import agregarGasto from "../firebase/agregarGasto";

// Componente
const FormularioGasto = () => {

    // Estados
    const [categoria, cambiarCategoria] = useState('comida');
    const [fecha, cambiarFecha] = useState(new Date());
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    const [mensaje, cambiarMensaje] = useState();
    const [validacion, cambiarValidacion] = useState('incorrecta');

    // Universal id del usuario que inicio sesión
    const {sesion} = useAuth();
    const usuario = sesion.uid;       

    // Funciones
    const handleSubmit = (e) => {
        e.preventDefault();
                       
        // VALIDACION EN CLIENTE
        // 1.- Que no tengo ningún campo vacío
        if(inputDescripcion==='' || inputCantidad==='') {
            cambiarMensaje('Debe rellenar todos los datos');
            cambiarValidacion('incorrecta');
            return;
        }

        // Si no se produjo ningun return de la validacion en cliente agrego el gasto
        agregarGasto(
            categoria,
            fecha,
            inputDescripcion,
            inputCantidad,
            usuario
        ) 
        // Si se añadio correctamente el gasto
        .then (() => {

            // Valido ok
            cambiarMensaje('Gasto añadido con éxito');
            cambiarValidacion('correcta');

            // Restauro los valores por defecto
            cambiarCategoria('comida');
            cambiarFecha(new Date());
            cambiarInputDescripcion('');
            cambiarInputCantidad('');

        })
        // Si no se añadio el gasto
        .catch((error)=>{
            console.log(error);
            cambiarMensaje('No se pudo añadir el gasto en la base de datos');
            cambiarValidacion('incorrecta');
        })
    }

    const handleChange = (e) => {
        if(e.target.name === 'inputDescripcion') cambiarInputDescripcion(e.target.value);
        // Remplazará todo lo que no sea un numero y un punto por un espacio blanco
        // Y añadirá al final el simbolo del euro
        else if (e.target.name === 'inputCantidad') {
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, '') + ' €');
          }
    }
    
    return ( 
        <>        
            <Formulario onSubmit={handleSubmit}>

                {/* Filtros */}
                <ContenedorFiltros>
                    <SelectCategorias
                        categoria={categoria}
                        cambiarCategoria={cambiarCategoria}
                    />
                    <DatePicker
                        fecha={fecha}
                        cambiarFecha={cambiarFecha}
                    />
                </ContenedorFiltros>

                {/* Inputs */}                   
                <Input 
                type="text"
                name="inputDescripcion"
                placeholder="descripcion del gasto"
                value={inputDescripcion}
                onChange={handleChange}
                
                />

                <InputGrande
                type="text"
                name="inputCantidad"
                placeholder="0.00€"
                value={inputCantidad}
                onChange={handleChange}
                
                />

                {/* Boton */}
                <ContenedorBoton>
                    <Boton $primario $conIcono as="button" type="submit">Agregar Gasto 
                        <IconoPlus/> 
                    </Boton>
                </ContenedorBoton>

                {/* Mensaje con el error de la validacion si se produjese */}
                <Mensaje $validacion={validacion} mensaje={mensaje}/>               
            
            </Formulario>
            
        </>
     );
}
 
export default FormularioGasto;