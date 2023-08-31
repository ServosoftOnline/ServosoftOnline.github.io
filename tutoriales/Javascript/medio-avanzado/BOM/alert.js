/*

OBJETO BOM: ALERT
Podría programas las mías con html, css y javascript. Esto ahorra tiempo pero son menos profesionales
Tres tipos:
    1.- window.alert(). alerta regular. Informamos sobre algo
    2.- windows.confirm(). Alerta de confirmación. Si el usuario acepta devuelve true. Si no acepta devuelve false
    3.- windows.prompt(). Alerta con input. El usuario puede escribir

*/

// Alerta de confirmación. Si eres mayor de edad muestra alerta bienvenido en caso contrario debes venir acompañado 
const ingresar = () => {
    const esMayor = confirm('Eres mayor de edad?');
    if (esMayor) {
        alert('Bienvenido');
    } else {
        alert ('Debes entrar con un mayor');
    }
}

// Alerta con input. Pregunta tu nombre y te saluda
const saludar = () => {
    const nombre = prompt ('Cual es tu nombre?');
    alert(`${nombre} eres bienvenido`);
}