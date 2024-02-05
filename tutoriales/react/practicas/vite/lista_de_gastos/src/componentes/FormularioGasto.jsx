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

// Firebase
import { db } from './../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";
import { fromUnixTime } from "date-fns";

// Contexto
import { useAuth } from "../contextos/AuthContext";

// Componente
const FormularioGasto = () => {

    // Estados
    const [categoria, cambiarCategoria] = useState('comida');
    const [fecha, cambiarFecha] = useState(new Date());
    const [inputDescripcion, cambiarInputDescripcion] = useState();
    const [inputCantidad, cambiarInputCantidad] = useState();
    const [mensaje, cambiarMensaje] = useState();
    const [validacion, cambiarValidacion] = useState(true);

    // Usuario que inicio sesión POR AQUI VOY--------------------------------------------
    const {usuarioInicioSesion} = useAuth();
    console.log(usuarioInicioSesion);

    // Funciones
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // VALIDACION EN CLIENTE
        // 1.- Que no tengo ningún campo vacío
        if(inputDescripcion==='' || inputCantidad==='') {
            cambiarMensaje('Debe rellenar todos los datos');
            cambiarValidacion(false);
            return;
        }

        // Si no se produjo ningun return de la validacion agrego el gasto
        // La fecha la paso en segundos y la cantidad con decimales con dos dígitos
        try {            
            await addDoc(collection(db, 'gastos'), {
            categoria: categoria,
            fecha: getUnixTime(fecha),
            descripcion: inputDescripcion,
            cantidad: parseFloat(inputCantidad).toFixed(2)
            });

            cambiarMensaje('Gasto añadido con éxito');
            cambiarValidacion(true);

        } catch(error) {
            console.log(error);            
        }
        
    }

    const handleChange = (e) => {
        if(e.target.name === 'inputDescripcion')
            cambiarInputDescripcion(e.target.value);
        else if (e.target.name === 'inputCantidad')
            // Mientras se escribe en el input remplazará todo lo que no sea un numero y un punto por un espacio blanco
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
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
                <Mensaje validacion={validacion} mensaje={mensaje}/>
                
            
            </Formulario>

            
        </>
     );
}
 
export default FormularioGasto;

