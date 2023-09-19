/*
APRENDIENDO React
  
- Iniciar una aplicacion react

  - Hay que tener instalado node.js y gitbash
    - node.js se instala desde: https://nodejs.org/en/download
      - En git bash escribimos node -v y nos mostrará la version de node.js si está instalada
    - gitbash se instala desde: https://git-scm.com/downloads

  - Hay que descargar la estructura de la aplicacion e iniciar el servidor 
    - npx create-react-app nombre_de_la_aplicacion_sin_espacios_o_caracteres espaciales. 
    - npm run start. Inicia el servidor local para ejecutar react y actualizará automaticamente el navegador
    - Creará un archivo public/index.html que tendrá un div con un id llamado root y un src/index.js
    - Modificaremos el archivo index.js mediante instruciones JSX situadas entre las etiquetas <React.StrictMode>
    - Mediante el método root.render mostrará el contenido en el navegador
    
  - Integrar la terminal de gitbash en Visual studio code
    - Evitará tener que abrir git bash en otra ventana externa 
    - Ctrl + ñ muestra la consola
    - Ejecutar npm run start



- Instrucciones JSX. 
  - Son instrucciones de javascript y html juntas que serán renderizadas y mostradas en el navegador.
  - Es recomendable trabajar siempre con la consola abierta para mostrar posibles errores.
  - Existe un div con el id llamado root que lo engloba todas las instrucciones JSX
    - Puedo añadir más div dentro del root
  - Las instrucciones javascript deben ir entre llaves
  - Para definir clases debemos usar className en lugar de class
  - Podemos añadir estilos de forma dinámica usando variables

  - Condicionales:
    - Forma 1: Usando sentencias if de javascript en funciones fuera de JSX. Menos usual. Lo inserté en Usuario.js
    - Forma 2: Insertando condicionales en el interior de las instrucciones JSX de la siguiente manera:
      - {condicion ? Instrucciones si se cumple la condicion : Instrucciones si no se cumple} 
        - Si quiero poner mas de una instruccion debo separarlos por una etiqueta div o similar
        - Añadir condiciones anidadas. {condicion && instrucciones}
    - Muestro ejemplos de ambas formas en Usuario.js. Comento la forma 1 que es menos usual
    
  - Arreglos
    - Podemos mostrar el contenido de un arreglo y mostrarlos en una lista mediante el método map
      - Añado cada elemento de forma dinámica
      - Cada hijo de una lista debe tener una única clave. Para ello usaremos el parámetro index 

- Componentes
  - Permite crear un código que podemos encapsular y reutilizar. Los usamos como etiquetas html
  - Tipos:
  
    - Componentes basados en clases. 
      - Menos usual. Antes se hacía asi. No había hooks, ni trabajar con estados-
      - Puede ser que encontremos código antiguo que se basen en estos componentes
      - Lo explico en el archivo contadorClass.js

    - Componente funcionales. 
      - Reglas:
        - Los nombres de los componentes sigue la estructura camelcase pero con el primer caracter en mayusculas
        - Siempre debe devolver código JSX
        - Los llamamos como si fueran etiquetas html. Ej: <Componente />      
        - Debemos crear un archivo javascript por cada componente
          - Si necesitamos importar la libreria de react podemos escribir imr + tab y la autocompleta
          - Si escribes sfc + tab se genera automaticamente la estructura de un componente exportado
        - Pueden anidarse unos dentro de otros
        - Se suele crear un componente llamado App que es el único que renderizamos
          - Desde App vamos llamando al resto de componentes

      - Para exportarlos e importarlos:
        - Si solo queremos exportar e importar un solo componente:
          - Usamos export default Componente y import Componente from "./Archivo.js";
        - Si queremos exportar e importar mas de un componente:
          - Usamos export {Componente1, Componente2} y import {Componente1, Componente2 from "./Archivo.js";
          - Si el archivo destino solo va a usar un componente debemos solo importar dicho componente
      
      - Propiedades:
        - Muestro ejemplos de ambas formas en Titulo.js. Dejando comentada la forma 1 menos usual
        - Forma 1 de usarlas:
          - Al crear el componente:
            - Pasamos como argumento la propiedad, la llamamos props y podemos usarla como props.propiedad
          - Al llamarlo al componente:
            - <Componente propiedad = "valor" />
        - Forma 2: Desctructuracion. Mas común y dinámico
          - props es un objeto formado por la propiedad y el valor que le pasamos al llamar al componente
          - Podemos destructurar y quedarnos solo con el valor.
          - Al crear el componente en lugar de llamar props al argumento pondremos entre llaves las propiedades
          - Al crear el componente podemos establecer valores por defecto a las propiedades añdiendo un = valor
          - Podemos pasar como propiedad:
            - Texto
            - Números
            - Arreglos
            - Objetos
            - Instrucciones JSX
            - ....
      
      - Agregar un evento al componente
        - Se agrega al llamar al componente
          - <Componente evento = {funcion} > </Componente>
          - La función contendrá el codigo a ejecutar.
          - Podrá ser declarada dentro de las llaves o llamarla y declararla fuera

    - Estado
      - Situación en la que se encuentra una aplicación
      - Crear un estado:
        - let vble = valor;
          const [vble, cualSeraLaFuncionQueCambieSuEstado] = hook(valorInicial)
      - Cada vez que cambiemos un estado el componente vuelve a cargarse

    - Hook
      - Permite añadirle mas funcionalidad a nuestro código
      - Debemos importarlos asi: import { hook } from 'react';
          - Ejemplo import {useState} from 'react';  
      - Se usan en lugar de las vbles para detectar los cambios de estado        

    - Relacion Estados y hook
      - Dependiendo del estado en que se encuentre una aplicacion y el hook que usemos podremos usar un código u otro y mostrar en pantalla una información u otra
        - Si no se ha registrado un usuario mostramos una pantalla y si no mostramos otra
      - Un ejemplo de esto se encuentra en App.js

    - Formularios
      - Eventos de formulario
        - onchange permitirá ejecutar una función cada vez que el input cambie. 
          - Si no lo uso la consola advertira que un componente está cambiando de forma incontrolada
          - En su interior ejecutaremos una función
            - La función la llamamos y declaramos fuera
              - Esta función llamará a la función que cambia el estado  
              - Tendremos como parámetro el evento, accedemos a su target y asignamos el value del formulario
          - onSubmit
            - Ejecutará una función cuando se envie el formulario
            - preventDefault. Permite modificar el comporamiento por defecto. 
              - En este caso no enviará los datos del formulario y podremos validarlo antes
            - Validamos los datos mediantes condicionales
        - En el archivo FormularioInicioSesion.js aplico lo anterior. Es un formulario no seguro

- Añadiendo estilos a los componentes
  - Hay varias formas
    - Crear un archivo css por cada componente con el mismo nombre que el .js y en la misma carpeta
      - Viene integrado en create-react-app
      











*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />        
  </React.StrictMode>
);
