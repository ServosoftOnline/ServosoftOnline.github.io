/*
    RUTAS PARA COORDINADORES
*/

// Componentes para las rutas
import Coordinador from "../componentes/Coordinador";
import ComponenteDireccion from "../componentes/ComponenteDireccion";
import Ilocalizable from './../componentes/Ilocalizable';
import Mantenimiento from "../componentes/Mantenimiento";
import FaltaCitas from "../componentes/FaltaCitas";
import Incidencias from "../componentes/Incidencias";
import Oym from "../componentes/Oym";
import Agenda from "../componentes/Agenda";
import Supervision from "../componentes/Supervision";
import InstaladosFinalizados from "../componentes/InstaladosFinalizados";

// Cada ruta individual exportada
export const RutaCoordinador = () => <Coordinador />;
export const RutaDireccion = () => <ComponenteDireccion />;
export const RutaIlocalizable = () => <Ilocalizable />;
export const RutaMantenimiento = () => <Mantenimiento />;
export const RutaFaltaCitas = () => <FaltaCitas />;
export const RutaIncidencias = () => <Incidencias />;
export const RutaOym = () => <Oym />;
export const RutaAgenda = () => <Agenda />;
export const RutaSupervision = () => <Supervision />;
export const RutaInstaladosFinalizados = () => <InstaladosFinalizados />;





// // React
// import React from "react";
// import {Route, Routes} from 'react-router-dom';

// // Componentes
// import Coordinador from "../componentes/Coordinador";
// import ComponenteDireccion from "../componentes/ComponenteDireccion";
// import Mantenimiento from "../componentes/Mantenimiento";
// import FaltaCitas from "../componentes/FaltaCitas";
// import Incidencias from "../componentes/Incidencias";
// import Oym from "../componentes/Oym";
// import Agenda from "../componentes/Agenda";
// import Supervision from "../componentes/Supervision";
// import InstaladosFinalizados from "../componentes/InstaladosFinalizados";

// const RutasCoordinador = () => {
//     return (
//         <>
//             {/* Rutas públicas para administradores */}
//             <Route path='/coordinador' element={<Coordinador />} />
//             <Route path='/direccion' element={<ComponenteDireccion />} />              
//             <Route path='/ilocalizable' element={<Ilocalizable />} />
//             <Route path='/mantenimiento' element={<Mantenimiento />} />
//             <Route path='/falta-citas' element={<FaltaCitas />} />
//             <Route path='/incidencias' element={<Incidencias />} />
//             <Route path='/oym' element={<Oym />} />
//             <Route path='/agenda' element={<Agenda />} />
//             <Route path='/supervision' element={<Supervision />} />
//             <Route path='/instalados-finalizados' element={<InstaladosFinalizados />} />
//         </>
//     );
// }
 

// export default RutasCoordinador;