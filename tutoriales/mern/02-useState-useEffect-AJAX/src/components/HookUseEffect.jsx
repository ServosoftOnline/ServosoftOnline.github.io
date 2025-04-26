/*
EJEMPLO DE USO DE USEEFFECT

    - Modificará el estado de mostrar privilegios cada vez que estos cambien
    - Montará y desmontará los componentes BienvenidaUsuario y BienvenidaAdministrador dependiendo del efecto
    - Tambien se podrá usar un return dentro del useEffect que se ejecutaría cuando se desmonente un componente
*/

import React, { useEffect, useState } from 'react';
import { BievenidaUsuario } from './BienvenidaUsuario';
import { BienvenidaAdministrador } from './BienvenidaAdministrador';


// Componente
export const HookUseEffect = ({nombre, privilegio}) => {
    const [muestraPrivilegios, setMuestraPrivilegios] = useState(false);

    // Efecto
    useEffect(() => {        
        (privilegio == "Administrador") ? setMuestraPrivilegios(true): setMuestraPrivilegios(false);        
    }, [privilegio]);
    
    // Renderizo
    return (
        <div>            
            <h2>
                {muestraPrivilegios ?
                    <BienvenidaAdministrador
                        nombre={nombre}
                        privilegio= {privilegio}
                    />
                    :
                    <BievenidaUsuario
                        nombre={nombre}
                        privilegio= {privilegio}
                    />
                }
            </h2>                        
        </div>
    )
}