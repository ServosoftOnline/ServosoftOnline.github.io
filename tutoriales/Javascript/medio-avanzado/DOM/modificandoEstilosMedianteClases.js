/*
- DOM: MODIFICAR ESTILOS CSS MEDIANTE CLASES

    - Pasos:
        1.- Obtener el elemento que contiene el estilo a modificar
        2.- Modificamos el estilo añadiendo o eliminando caracteres al nombre de la clase
        3.- Para ello usamos los metodos de elemento.classList
            - elemento.classList.add(caracteres a añadir a la clase).
            - elemento.classList.remove(caracteres a eliminar de la clase).
            - elemento.classList.toggle(caracteres a alternar).
                - Si no los tiene los pone y si los tiene los quita.
                - Haremos con un solo método la suma de los métodos anteriores
            - elemento.classList.contais(caracter a comprobar).
            - Puede usar otros métodos como lenght, forEach(), ...
    - Ejemplo muy usual de este código:
        - Al presionar un botón llamado "Abrir menú" puedo abrir un menú si le añado la palabra activo a su clase
          y lo puedo cerrar con otro botón llamado "Cerrar Menu"si le elimino la palabra activo a su clase
        - Con el método toggle lo haré con un solo boton para abrir y cerrar

*/ 

// En este ejemplo el documento html ya tiene creada una clase que se llama caja
// Si añadimos la palabra activa, la clase se llamará caja activa y actuará el estilo llamado clase activa
// Si eliminamos la palabra activa, la clase se llamara caja actuará el estilo llamado clase


const elemento = document.querySelector('#contenedor1 .caja');

const agregarActiva = () => {
    elemento.classList.add('activa');
}

const eliminarActiva = () => {
    elemento.classList.remove('activa');
}

const toggleActiva = () => {
    elemento.classList.toggle('activa');
}

const comprobarActiva = () => {
    if (elemento.classList.contains('activa')){
        console.log('La clase está activa');

    } 
    else console.log('La clase no está activa');
        
}