/*
    Uso de la api del navegador local storage:
    
        - No es necesario importar la api. Ya la trae el navegador
        - Añadimos información mediante el método setItem
        - La eliminamos mediante el método
        - La información podré verla en la pestaña almacenamiento del navegador al que se accede al inspeccionar la pagina

*/

// Cuando se haga click en el elemento cuyo id sea botón1 añadiré un nombre de usuario a local storage con la key usuario
document.getElementById('boton1').addEventListener('click', () => {

    // Muestro una ventana en el navegador y almaceno el nombre en la cte nombre
    const nombre = prompt('Escribe tu nombre');

    // Guardo mediante la API de local storage y el metodo setItem. El nombre en la key usuario. Parámetros: la key y el valor    
    window.localStorage.setItem('usuario', nombre);

})

// Cuando se haga click en el elemento cuyo id sea botón2 elimino la key usuario
document.getElementById('boton2').addEventListener('click', () => {

    // Elimino de local storage la key usuario
    window.localStorage.removeItem('usuario');
    
})

// Accedo a la información almacenada en local Storage si existiera
if(window.localStorage.usuario) console.log('Usuario registrado: ' + window.localStorage.usuario);
else console.log('No existe usuario registrado');