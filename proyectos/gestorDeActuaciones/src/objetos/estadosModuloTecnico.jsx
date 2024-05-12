// OBJETO QUE CONTIENE LAS ZONAS DE INSTALACION

const estadosModuloTecnico = [    
    
    {id:0,  estado: 'EstadoSupervision',    descripcion:'Instalado'},
    {id:1,  estado: 'EstadoIlocalizable',   descripcion:'Cliente ausente / No responde'},
    {id:2,  estado: 'EstadoIncidencias',    descripcion:'Error de dirección'},
    {id:3,  estado: 'EstadoFaltaCitas',     descripcion:'Falta cita'},
    {id:4,  estado: 'EstadoMantenimiento',  descripcion:'Sin señal en CTO / Mantenimiento'},
    {id:5,  estado: 'EstadoIncidencias',    descripcion:'Sin llaves del RITI'},
    {id:6,  estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Calle)'},
    {id:7,  estado: 'EstadoIncidencias',    descripcion:'Canalización obstruida (Cliente)'},
    {id:8, estado:  'EstadoIncidencias',    descripcion:'No hay paso / Anulado por cliente'},
    {id:9, estado:  'EstadoIncidencias',    descripcion:'Falta permiso'},
    {id:10, estado: 'EstadoIncidencias',    descripcion:'Obra cliente'},
    {id:11, estado: 'EstadoIncidencias',    descripcion:'Sin finalizar'},
    {id:12, estado: 'EstadoIncidencias',    descripcion:'Anulamos?'},
    {id:13, estado: 'EstadoIncidencias',    descripcion:'Duplicado'},
    {id:14, estado: 'EstadoIncidencias',    descripcion:'Anulada'}
    
];

export default estadosModuloTecnico;
