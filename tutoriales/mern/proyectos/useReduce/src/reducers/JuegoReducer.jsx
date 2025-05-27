/*
    REDUCER:
        - Contiene las diferentes acciones que podemos realizar con el estado
*/
export const JuegoReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'crear':

            // Devuelve el estado tal y como estaba y añade los datos que provienen del payload
            return [...state, action.payload];

        case 'eliminar':

            // Filtra el estado eliminando el juego con el id que proviene del payload                        
            return state.filter((juego) => juego.id !== action.payload);

        case 'editar':
            
            // Obtengo el indice que quiero modificar, le modifico los datos y lo devuelvo
            const indiceAModificar = state.findIndex((juego) => juego.id === action.payload.id);            
            state[indiceAModificar] = action.payload; 
            return [...state];
    
        default:
            return state;
    }
}
