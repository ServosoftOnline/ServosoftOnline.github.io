/*
    INSTRUCCIONES BREAK Y CONTINUE
    
    - break
        - Ya lo usamos con el condicional switch para salir de él.
        - Tambien se pueden usar en los ciclos rompiendo su ejecución cuando me la encuentro.

    - continue
        - Cuando me lo encuentro salto a la siguiente interacion

*/

// Ejemplo de break. Si encuentro un nombre que no empieza por A dejo de ejecutar el ciclo for
const nombres = ['Antonio', 'Andrés', 'Alfredo', 'Juán', 'Abelardo', 'Abdel'];
for (let i = 0; i < nombres.length ; i++ ) {
    if (nombres[i][0] !== 'A'){
        console.log(`He encontrado a ${nombres[i]} que no empieza por A. Debo salir`);
        break;
    } else {
        console.log(nombres[i]);
    }    
}

// Ejemplo de continue. Muestro una lista de invitados, pero no quiero invitar a Javier
const invitados = ['Jesús', 'Fermín', 'Javier', 'Javito', 'Ariel'];
console.log('Lista de invitados: ');
for (let i = 0; i < invitados.length; i++ ) {
    if (invitados[i] === 'Javier') continue;
    console.log(invitados[i]);
}
