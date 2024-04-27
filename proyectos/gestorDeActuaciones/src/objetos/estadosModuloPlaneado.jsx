// OBJETO QUE CONTIENE LAS ZONAS DE INSTALACION

const estadosModuloPlaneado = [

    {id:0,  estado: 'EstadoPteCoordinar',   descripcion:'Pendiente de coordinar'},
    {id:1,  estado: 'EstadoFaltaCitas',     descripcion:'A espera de confirmar cliente'},
    {id:2,  estado: 'EstadoIncidencias',    descripcion:'Anulada'},
    {id:3,  estado: 'EstadoAgenda',         descripcion:'Citada'},
    {id:4,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ilocalizable / Fuera del pais'},
    {id:5,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ausante / No responde'},
    {id:6,  estado: 'EstadoIncidencias',    descripcion:'Error de dirección'},
    {id:7,  estado: 'EstadoIncidencias',    descripcion:'Falta permiso'},
    {id:8,  estado: 'EstadoSupervision',    descripcion:'Instalado'},
    {id:9,  estado: 'EstadoIncidencias',    descripcion:'No hay paso / Anulado por cliente'},
    {id:10, estado: 'EstadoIncidencias',    descripcion:'Obra cliente'},
    {id:11, estado: 'EstadoIncidencias',    descripcion:'Sin finalizar'},
    {id:12, estado: 'EstadoMantenimiento',  descripcion:'Falta conexion DC'},
    {id:13, estado: 'EstadoMantenimiento',  descripcion:'Sin señal en CTO / Mantenimiento'},
    {id:14, estado: 'EstadoOyM',            descripcion:'Trabajos de cableado'},    
    {id:15, estado: 'EstadoFaltaCitas',     descripcion:'Falta cita'},
    {id:16, estado: 'EstadoIncidencias',    descripcion:'Anulamos?'},
    {id:17, estado: 'EstadoIncidencias',    descripcion:'Duplicado'},
    {id:18, estado: 'EstadoIncidencias',    descripcion:'Sin llaves del RITI'},
    {id:19, estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Calle)'},
    {id:20, estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Cliente)'},
    {id:21, estado: 'EstadoOyM',            descripcion:'Falta cable F12 / CTO'},
    {id:22, estado: 'EstadoOyM',            descripcion:'Falta cable general'}
    
];

export default estadosModuloPlaneado;
