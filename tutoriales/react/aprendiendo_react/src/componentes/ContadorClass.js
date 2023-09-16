/*
    COMPONENTES BASADO EN CLASE: EJEMPLO DE UN CONTADOR

        - Es antiguo. No se suele usar. Lo explico por si lo veo.
        - Importamos react y Component
        - Crear una clase con el nombre del componente extiendo la funcionalidad de componente
        - Usabamos un método llamado render
            - Aquí introducimos lo que queremos que se vea en pantalla
            - Dentro introducimos el return
            - En onClick ya no podemos solicitar usar una funcion. en su lugar usaremos un método
                - Este método se declara antes de render
                - Para llamar al método usaremos la palabra reservada this.metodo que indica el metodo de esta clase
        - Crear estados
            - Usar el metodo constructor
                - Se ejecuta siempre que carga la aplicacion
                - Accedemos a las propiedades que le pasemos al componente
                - Usamos el metodo super y añadimos las propiedades
                - this.state permite añadir un estado
                    - Le pasamos un objeto compuesto por una propiedad y un valor
        - Modificar un estado
            - En nuestro ejemplo lo hacemos en las funciones de incrementar y disminuir
            - En el interior del return ya puedo usar el estado y lo muestro entre llaves
            - Para establecer un nuevo estado usamos el metodo this.setState
                - Indicamos el estado anterior
                - Devolvemos un objeto con el nuevo estado
        
        - Métodos de ciclo de vida:
            - componentDidMount
                - Se ejecutará cuando se monte el código
                - LLamará alguna API si fuera necesario
            - componentDidUpdate
            
            


            
            




*/      


import React, { Component } from 'react';

class ContadorClass extends Component {

    constructor(props){
        super(props);
        this.state = { contador: 0 };
    }

    componentDidMount () {
        console.log('El componente se cargó en el DOM');
        // Llamo a una API ...
    }

    componentDidUpdate () {
        console.log('El componente se actualizó');    
    }
    
    incrementar(cantidad) {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador + cantidad
            }
        });
    }

    disminuir(cantidad) {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador - cantidad
            }
        });
    }
    
    render(){
        return (
            <div>
                <h3>Contador mediante componente basado en clases: {this.state.contador}</h3>
                <button onClick={() => this.incrementar(this.props.aumenta)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.disminuye)}>Disminuir</button>
            </div>
        );
    }

}

export default ContadorClass;
