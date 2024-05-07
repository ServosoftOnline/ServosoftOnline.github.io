// OBJETO QUE CONTIENE LAS ZONAS DE INSTALACION

const estadosModuloPlaneado = [

    {id:0,  estado: 'EstadoPteCoordinar',   descripcion:'Pendiente de coordinar'},
    {id:1,  estado: 'EstadoFaltaCitas',     descripcion:'A espera de confirmar cliente'},
    {id:2,  estado: 'EstadoIncidencias',    descripcion:'Anulada'},
    {id:3,  estado: 'EstadoAgenda',         descripcion:'Citada'},
    {id:4,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ilocalizable / Fuera del pais'},
    {id:5,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ausente / No responde'},
    {id:6,  estado: 'EstadoIncidencias',    descripcion:'Error de dirección'},
    {id:7,  estado: 'EstadoIncidencias',    descripcion:'Falta permiso'},
    {id:8,  estado: 'EstadoIncidencias',    descripcion:'No hay paso / Anulado por cliente'},
    {id:9,  estado: 'EstadoIncidencias',    descripcion:'Obra cliente'},
    {id:10, estado: 'EstadoIncidencias',    descripcion:'Sin finalizar'},
    {id:11, estado: 'EstadoMantenimiento',  descripcion:'Falta conexion DC'},
    {id:12, estado: 'EstadoMantenimiento',  descripcion:'Sin señal en CTO / Mantenimiento'},
    {id:13, estado: 'EstadoOyM',            descripcion:'Trabajos de cableado'},    
    {id:14, estado: 'EstadoFaltaCitas',     descripcion:'Falta cita'},
    {id:15, estado: 'EstadoIncidencias',    descripcion:'Anulamos?'},
    {id:16, estado: 'EstadoIncidencias',    descripcion:'Duplicado'},
    {id:17, estado: 'EstadoIncidencias',    descripcion:'Sin llaves del RITI'},
    {id:18, estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Calle)'},
    {id:19, estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Cliente)'},
    {id:20, estado: 'EstadoOyM',            descripcion:'Falta cable F12 / CTO'},
    {id:21, estado: 'EstadoOyM',            descripcion:'Falta cable general'}
    
];

export default estadosModuloPlaneado;
