/*
    FETCH:

        - API que ya viene incluida. No es necesario importarla
        - Permite extraer datos de alguna dirección

        - En este ejemplo usaré datos falsos desde jasonplaceholder para hacer pruebas
            - https://jsonplaceholder.typicode.com/posts

            - Usaré fech de diferentes formas obteniendo el mismo resultado:
                - Mediante una promesa 
                - Mediante una funcion y async / await
                - Mediante una funcion, async / await y try / catch
                - Evito declarar la función y me ahorro el async uso solo await y try / catch
*/


// Uso de fetch mediante una promesa
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))

// Mismo resultado de el codigo anterior pero mediante una funcion y async / await
async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}

loadData()

// Mismo resultado que el codigo anterior pero usando una funcion y try / catch
async function loadData2() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }    
}

loadData2()

/*  Mismo resultado que el codigo anterior sin usar funciones asincronas y llamarla despues.
    Gracias a que trabajamos con modules y en package.json tenemos indicado "type": "module"
*/

try {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)

} catch (error) {
    console.log(error)
}    