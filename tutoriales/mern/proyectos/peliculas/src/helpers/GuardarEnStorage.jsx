/*
    Funcion que almacena las peliculas en localstorage:
        - El parámetro key el nombre con el que lo guardaré en local storage
        - El parametro elemento es el elemento que quiero guardar

*/

export const guardarEnStorage = (key, elementos) => {

    localStorage.setItem(key, JSON.stringify(elementos));
    return elementos;

}