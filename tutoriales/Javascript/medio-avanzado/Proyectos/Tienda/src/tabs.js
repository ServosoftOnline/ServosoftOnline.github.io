/*

FUNCIONALIDAD DE LAS PESTAÑAS (TABS)

    - Están todas englobadas en el div cuya clase o id es "mas-informacion"
    - Contiene:
        - El div con la clase "tabs".
            - Corresponde con la barra de navegación. 
            - Son los botones que contiene el nombre de las pestañas.
                - Tienen la clase  tabs__button donde se le aplican estilos
                - Añadirá la clase tabs__button--active cuando sea activada identificando el boton seleccionado
                - Su atributo personalizado data-tab permitirá mostrar su contenido asociado activando la tab

        - tres divs con la clase "tab".
            - Tienen un id con el nombre de la pestaña.
            - Contiene la información asociada a las pestañas
            - Añadimos la clase "tab--active" a la clase activa cuando hagamos click sobre ella
            
        - Cuando hagamos click en la barra:
            - Activamos la pestaña. clase "tab--active".    
            - Activamos el botón. clase "tabs__button--active"
            - Mostrará la información correspondiente
            - Ocultará la informacion que no corresponde
            
            
    
    - Será reutilizable para ello trabajare con clases:
    
        - La exportaremos desde este archivo y la importaré en index.js

        - En este archivo tabs.js:
            - Creo la clase y la exporto
            - Creo el método constructor que contendrá sus propiedades y métodos. Recibe el id
                - Almaceno todo el elemento asociado a ese id y lo almaceno en la propiedad this.tabs
                - Almaceno la barra de navegación que contiene el elemento cuya clase es tabs
                    - Le agrego un event listener a toda la barra
                    - Obtengo su lista de clases
                        - Puedo obtener, dependiendo de donde haga click 
                            - Las clases "tabs__button" y "tabs__button--active" si pincho en la pestaña activa
                            - La clase "tabs__button" si pincho en cualquiera de las dos pestañas no activas
                            - La case "tabs" si pincho en medio de las pestañas
                        
                    - Las paso a array mediante [] y el operador spread ...
                    - Usamos la funcion includes para ver si algun elemento del array contiene "tabs__button"
                        - Si la encuentra devuelve true. Significa que pinche en una pestaña
                            - Accedo a su atributo personalizado. Coincide con el nombre de la pestaña a mostrar
                            - Guardo la pestaña en la cte tab
                            - Obtengo de todo el elemento que div tiene la clase con el nombre de la pestaña
                                - Uso backtrips, el caracter # que indica id.
                            - Le añado la clase "tab--active"
                                - Si hay alguna tab activa la debo desactivar antes
                            - Le añado la clase "button--active"
                                - Si hay un botón activo debo desactivarlo antes

        - En index.js
            - Importo la clase
            - Creo una instancia.
            - Adjunto como argumento el id "mas-informacion" del documento html
            - Si quiero reutilizar la clase
                - Creo otra estructura en el documento html
                    - Puedo añadir mas pestañas
                - En lugar de "mas-información", le pongo otro nombre. Ej: "mas-información2"
                - Modifico las pestañas y el contenido
                - Debo respetar el resto de nombres de clases
                - creo otra instancia y le pongo otro argumento el nuevo id "mas-informacion2"
            

*/

export default class Tabs {

    constructor(idElemento) {
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');

        this.nav.addEventListener('click', (e) => {
            if([...e.target.classList].includes('tabs__button')) {
                // Contiene la pestaña a mostrar.  
                const tab = e.target.dataset.tab;

                // Si hubiera algun botón activo lo desactivo. Quitandole el css de boton activo
                if (this.tabs.querySelector('.tabs__button--active')) {
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                // Activo el botón seleccionado
                e.target.classList.add('tabs__button--active');

                // Si hubiera una pestaña activada la desactivo ocultando su información asociada
                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }

                // Activo la información de la pestaña a mostrar
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');
            
            };
        });
    };
};