/*
    RUTAS PARA ADMINISTRADORES
*/

// Componentes para las rutas
import Administrador from "../componentes/Administrador";
import CrearUsuario from "../componentes/CrearUsuario";
import Produccion from "../componentes/Produccion";
import CalendarioAusencias from "../componentes/CalendarioAusencias";
import ReporteGeneral from "../componentes/ReporteGeneral";

// Cada ruta individual exportada
export const RutaAdministrador = () => <Administrador />;
export const RutaCrearUsuario = () => <CrearUsuario />;
export const RutaProduccion = () => <Produccion />;
export const RutaCalendarioAusencias = () => <CalendarioAusencias />;
export const RutaReporteGeneral = () => <ReporteGeneral />;





// // React
// import React from "react";
// import {Route, Routes} from 'react-router-dom';

// // Componentes
// import Administrador from "../componentes/Administrador";
// import CrearUsuario from "../componentes/CrearUsuario";
// import Produccion from "../componentes/Produccion";
// import CalendarioAusencias from "../componentes/CalendarioAusencias";
// import ReporteGeneral from "../componentes/ReporteGeneral";

// const RutasAdministrador = () => {
//     return (
//         <>
//             {/* Rutas públicas para administradores */}
//             <Route path='/administrador' element={<Administrador />} />
//             <Route path='/crear-usuario' element={<CrearUsuario />} />
//             <Route path='/produccion' element={<Produccion />} />
//             <Route path='/calendario-ausencias' element={<CalendarioAusencias />} />
//             <Route path='/reporte-general' element={<ReporteGeneral />} />
//         </>           

//     );
// }
 

// export default RutasAdministrador;