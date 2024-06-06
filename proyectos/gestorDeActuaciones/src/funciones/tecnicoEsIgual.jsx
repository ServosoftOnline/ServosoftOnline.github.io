/*
    FUNCION QUE USARÉ PARA NO MOSTRAR NOMBRES DE TECNICOS REPETIDOS        
        - Devolverá true si ambos tecnicos, de la incidencia actual y la anterior, son iguales y false si son diferentes        
*/

const tecnicoEsIgual = (array, index, incidencia) => {
        
    // La posición 0 no tiene fecha anterior
    if(index!==0) {

        const tecnicoActual = incidencia.tecnico1;
        const tecnicoActuacionAnterior = array[index -1].tecnico1;

        if (tecnicoActual===tecnicoActuacionAnterior) return true;
        else return false;
    }
}

export default tecnicoEsIgual;