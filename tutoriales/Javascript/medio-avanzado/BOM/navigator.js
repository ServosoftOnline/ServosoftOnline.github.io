/*
    OBJETO BOM: NAVIGATOR. Propiedades:   
        - cokkieEnabled. Devuelve true si las cookies estan activadas
        - userAgent. Devuelve información que podremos usar para funciones mas avanzadas
        - language. Devuelve el idioma del navegador
        - onLine. Devuelve true si el navegador está conectado a internet
        
*/

// Muestra los métodos y propiedades de navigator
console.log(navigator);

// Propiedades más usuales
console.log(`cookies activadas: ${navigator.cookieEnabled}`);
console.log(`Información avanzada sobre el pc: ${navigator.userAgent}`);
console.log(`Idioma del navegador: ${navigator.language}`);
console.log(`Estoy conectado a internet: ${navigator.onLine}`);



