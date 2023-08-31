/*
    PROMESAS
    - Son estructuras que podemos definir para decirle al navegador que espere a que finalicemos una operacion
    - Le prometemos al navegador que espere y que cuando tengamos la operacion le avisamos y pasamos los datos
    - El navegador no ejecutará más codigo hasta que le avisemos
    
    - Para definir la promesa:
        - La creamos con new Promise()   
        - Le pasamos los callback resolve y reject. 
        - En el interior de las llaves indicamos que accion ejecutamos que tardará tiempo
        - resolve devuelve resultados exitosos y reject resultados erroneos
    
    - Para ejecutar la promesa:
        - Usamos los metodos then y catch.
        - El metodo then recibe el callback de resolve
        - El metodo catch recibe el callback de reject
        
    
*/

// Ejemplo: Un botón en el navegador que obtiene datos de una base de datos.
// Esto tarda, lo simularemos con setTimeout. Comprobaré si tuvo exito la consulta
// Cuando obtenga los datos aviso al navegador para que haga algo con ellos y se lo paso

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let exito = false;
        if (exito) resolve('Operación exitosa'); else reject('Operación erronea');
    }, 4000);  

});

promesa.then((mensajeProvenienteDeResolve) => {
    alert(mensajeProvenienteDeResolve);
})

promesa.catch((mensajeProvenienteDeCatch) => {
    alert(mensajeProvenienteDeCatch);
});
