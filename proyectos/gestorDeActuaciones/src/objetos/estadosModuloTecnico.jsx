// OBJETO QUE CONTIENE LAS ZONAS DE INSTALACION

const estadosModuloTecnico = [

    {id:0,  estado: 'EstadoEnCamino',       descripcion:'En camino'},
    {id:1,  estado: 'EstadoEnCliente',      descripcion:'En cliente'},
    {id:2,  estado: 'EstadoSupervision',    descripcion:'Instalado'},
    {id:3,  estado: 'EstadoAgenda',         descripcion:'Citada'},
    {id:4,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ausente / No responde'},
    {id:5,  estado: 'EstadoIncidencias',    descripcion:'Error de dirección'},
    {id:6,  estado: 'EstadoFaltaCitas',     descripcion:'Falta cita'},
    {id:7,  estado: 'EstadoMantenimiento',  descripcion:'Sin señal en CTO / Mantenimiento'},
    {id:8,  estado: 'EstadoIncidencias',    descripcion:'Sin llaves del RITI'},
    {id:9,  estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Calle)'},
    {id:10, estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Cliente)'},
    {id:11, estado: 'EstadoIncidencias',    descripcion:'No hay paso / Anulado por cliente'},
    {id:12, estado: 'EstadoIncidencias',    descripcion:'Falta permiso'},
    {id:13, estado: 'EstadoIncidencias',    descripcion:'Obra cliente'},
    {id:14, estado: 'EstadoIncidencias',    descripcion:'Sin finalizar'},
    {id:15, estado: 'EstadoIncidencias',    descripcion:'Anulamos?'},
    {id:16, estado: 'EstadoIncidencias',    descripcion:'Duplicado'},
    {id:17, estado: 'EstadoIncidencias',    descripcion:'Anulada'}
    
];

export default estadosModuloTecnico;
