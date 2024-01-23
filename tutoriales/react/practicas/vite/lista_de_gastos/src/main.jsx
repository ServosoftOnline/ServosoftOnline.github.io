/*
  APLICACION DE GASTOS.

    - Aplicación mas completa del curso.
    - Empiezo su desarrollo el dia 8 de enero de 2024
    - Ha sido creada en vite
    
    - El backend lo hare mediante firebase
      - Nombre del proyecto_ lista-de-gastos

      - Sigo las instrucciones indicadas en instalacion.txt en el apartado de firebase para crear el proyecto
        - No habilito google analytics
        - Habilitaré firebase hosting mas adelante. Quizas no lo haga y lo deje subido en git y lo enlazaré desde mi cv

      - Sigo las instrucciones indicadas en .env.local en el la practica contactosFirebase
        - Que permite ocultar el acceso a firebase mediante vbles de ambiente

    - Uso las siguientes librerias:
      - react router
      - styled components
      - webfontloader, que permite instalar fuentes de google fonts
      - react helmet, que permite entre otras cosas definir el favicon
      

    - Pasos a seguir para crear una app:

      1.- Crear las rutas
        1.- Crear el elemento contenedor que contendrá a la app
        2.- Creo los componentes que contendrán a cada pagina
        3.- Importar la fuente de google fonts que valla a usar
        4.- Importar BrowserRouter, Route, Routes para usar react router
        5.- Encierro todo en BrowserRouter

        6.- Creo cada una de las rutas englobadas en Routes
          - Las rutas tendrán el path que será la web que debe escribirse en el navegador y cargará el componente asociado
          - Creo si hubiera alguna ruta dinámica
          - Creo la ruta para el error 404 si pusieran una web inexistente en el navegador
          - Creo la ruta para el directorio raiz. En este caso el componente ppal

        7.- Pruebo cada una de las rutas escribiendolas en el navegador y viendo si se carga el componente adecuado

      2.- Creo el favicon y el titulo
      3.- Añado el fondo
      4.- Creo el archivo llamado theme.jsx. Contiene un objeto con las vbles con todos los colores.

      5.- Creo las cabeceras y crear los desplazamientos entre ellas

        5.1.- Creo un archivo llamado ElementosDeHeader
          - Contendrá todos los elementos que usaré en las cabeceras.
          - Los exportaré por separado
          - Importaré solo lo que necesite

        5.2.- Creo el elemento Boton.jsx.
          - Lo usaré para crear los diferentes botones de la aplicacion
          - Le aplicaré el componente Link de react router. lo que permitirá desplazarse hacia la ruta que le indique al llamarlo

          - Tendrá las siguientes propiedades:
            - primario. Tendrá el color primario asignado en theme.jsx. Si no le indico primario lo pintará en negro
            - conIcono. El icono será mas ancho
            - iconoGrande. Contendrá un svg


        5.3.- Creo el elemento BrnRegresar.jsx. Permite regresar a la ruta raiz
        5.4.- Al crear todas las cabeceras de las paginas iré añadiendo los estilos de header, los botones y el boton para regresar
      
      6.- Crear las secciones para iniciar sesion y registrarse         
        6.1.- Creo el elemento llamado ElementosDeFormulario.jsx. Contendrá todos los elementos que usaré en los formularios

        6.2.- Creo la pagina para crear una cuenta en firebase
          - Su elemento asociado al que apunta su ruta se llama RegistroUsuarios.jsx
          - La cabecera contendrá el titulo y un enlace hacia la pagina /iniciar-sesion
            - Usaré elementosDeHeader para crearla
            - Para el botón Iniciar Sesión usaré el elemento Boton.jsx como link. le pasaré la propiedad de primario

          - Usaré una imagen svg que crearé como componente.
          - El formulario que permitirá crear la cuenta en firebase
            - Usaré elementosDeFormulario.jsx para crear los inputos
            - Usaré Boton.jsx como button de submit

          - Creo la logica para crear un usuario en firebase

        6.3- Creo la pagina para iniciar sesion
          - Su elemento asociado al que apunta su ruta se llama InicioSesion.jsx
          - La cabecera contendrá el titulo y un enlace hacia la pagina /crear-cuenta
          - Tendrá prácticamente la misma estructura que RegistroUsuarios.jsx

      7.- Crear el proyecto en firebase
      
        - Sigo las indicaciones de:
          - instalacion.txt
          - contactosFirebase/.env.local
          - contactosFirebase/src/firebase/firebaseConfig

      8.- Creo la funcionalidad para crear una cuenta en firebase
        8.1.- Configuro el servicio de authentificación desde la consola de firebase

        8.2.- Agrego la funcionalidad al componente RegistroUsuarios.jsx
          - Agrego los values y onChange al formulario
          - Para definir los values añado un estado para cada input y le asigno su valor.
          - las funciones que se ejecutarán cuando se ejecute el onChange la llamaré handleChange
          - Defino la funcion handleChange. Dependiendo del nombre del input cambiará el estado correspondiente
          - Indico en la etiqueta del formulario que cuando se haga un onSubmit se ejecute la funcion handleSubmit

          - Defino la funcion handleSubmit
            - valido los campos. Sería recomendable validarlos tambien en el lado del servidor
            - Si pasa la validación agrego el usuario en firestore
            - firestore realiza validaciones en el lado del servidor
              - Debo obtener esos errores, los traduzco a mensajes en español que por ahora mostraré en consola
            - Cuando acaben las validaciones del servidor y añada el usuario correctamente redirijo hacia App.jsx y añado gastos
            
          - Defino el componente de alertas
            - Componente que evitará tener que mostrar los mensajes en consola y siendo mostrados en pantalla.
            


            



          





*/

// React y react router
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Helmet
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/logo.png'

// Elementos
import Contenedor from "./elementos/Contenedor";
import Fondo from './elementos/Fondo.jsx';

// Componentes
import EditarGastos from './componentes/EditarGastos.jsx'
import GastosPorCategoria from './componentes/GastosPorCategoria.jsx'
import InicioSesion from './componentes/InicioSesion.jsx'
import ListaDeGastos from './componentes/ListaDeGastos.jsx'
import RegistroUsuarios from './componentes/RegistroUsuarios.jsx'
import Error404 from './componentes/Error404.jsx'

// WebFontLoader. Descarga fuente de google fonts
import WebFont from 'webfontloader';
WebFont.load({
  google: {
  families: ['Work Sans:400,500,700', 'sans-serif']
}
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* Helmet */}
      <Helmet>
        <title>Gastos</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      {/* Fondo */}
      <Fondo/>
      
      {/* react router */}
      <BrowserRouter>
        <Contenedor>

          <Routes>

            {/* Rutas hacia las paginas principales */}
            <Route path='/iniciar-sesion' element={<InicioSesion />} />
            <Route path='/crear-cuenta' element={<RegistroUsuarios />} />
            <Route path='/categorias' element={<GastosPorCategoria />} />
            <Route path='/lista' element={<ListaDeGastos />} />

            {/* En el path de editar le pasaré un id */}
            <Route path='/editar/id:' element={<EditarGastos />} />

            {/* Error 404 */}
            <Route path='*' element={<Error404/>} />

            {/* La ruta cuyo path sea la raiz cargaré el componente ppal */}
            <Route path='/' element={<App />} />

          </Routes>
          
        </Contenedor>      
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);

