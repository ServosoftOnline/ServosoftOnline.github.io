/* 
    OBJETO QUE CONTIENE LOS TRABAJOS QUE SUMARAN LOS PUNTOS DE UNA ACTUACION DE NIVEL4
    - Quise aplicarlos en el formularioEditarActuacionTecnico.jsx pero no pude
        - En formularioEditarActuacionTecnico.jsx tengo un estado por cada trabajo
        - Estos tienen una funcion cada uno para actualizarlo
        - Me costaría mucho sumar los puntos y restarlos si marcaban/desmarcaban los checkbox
    - Lo voy a dejar aquí solo para tener una referencia de los puntos que valen cada trabajo pero no los uso

*/

const trabajosNivel4 = [

    {id: 1, descripcion:'Fusión por fibra (torpedo, distribución, CTO)', puntos: 0.1},
    {id: 2, descripcion:'Instalación de Caja de Distribución', puntos: 2},
    {id: 3, descripcion:'Levantamiento de CTO Antala', puntos: 0.6},
    {id: 4, descripcion:'Instalación de Caja de Fusión (TOF 12) Caja de Distribución', puntos: 1},
    {id: 5, descripcion:'Instalación de Caja de Empalme (torpedo 96)', puntos: 1},
    {id: 6, descripcion:'Instalación de Cable interiores FO (50m)', puntos: 1.2},
    {id: 7, descripcion:'Instalación de Cable canalizado (arqueta) FO (50m)', puntos: 1.5},
    {id: 8, descripcion:'Instalación de Cable fachada/aereo FO (50m)', puntos: 1.7},
    {id: 9, descripcion:'Instalación de Cable CR/SUC FO (50m)', puntos: 2}

];

export default trabajosNivel4;