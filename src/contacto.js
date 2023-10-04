// AÑADE CONTACTO DE FORMA DINÁMICA - Debo hacerlo más dinámico insertando una data y recorriendo el contenido


const columnaIzquierda = document.querySelector('.columnaIzquierda');
const contacto = document.createElement('div');
contacto.classList.add('contacto');


// Plantilla
contacto.innerHTML = `    
    <div class = "contenido">
        <h3>Contacto</h3>
        <ul>
            <li>
                <i class="fa-solid fa-phone fa-beat" style = "color: #06395c;"> </i>
                <p>620890221</p>
            </li>
            <li>
                <i class="fa-solid fa-envelope fa-beat" style = "color: #06395c;"> </i>
                <p>oscarfernandezsantiago@gmail.com</p>
            </li>
            <li>
                <i class="fa-solid fa-house fa-beat" style = "color: #06395c;"> </i>
                <p>Calle biznaga, 10. Mijas (Málaga)</p>
            </li>
            <li>
                <i class="fa-solid fa-user-group fa-beat" style = "color: #06395c;"> </i>
                <p>Casado y con dos niños preciosos</p>
            </li>
        </ul>
    </div>
`;

// Añado al DOM
columnaIzquierda.appendChild(contacto);


/*
// Plantilla
<!-- 
            <div class = "titulacion">
                <h3>Titulación</h3>
                <div class = "contenido">
                    <ul>
                        <li> <b>Técnico Superior en Administración de Sistemas Informáticos Monousuario y
                            Multiusuario.</b></li>
                        <li>SEPTIEMBRE 1996 - JUNIO 1998</li>
                        <li>Instituto Bezmiliana en el Rincón de la Victoria</li>
                    </ul>
                    <ul>
                        <li><b>Bachillerato superior</b></li>
                        <li>SEPTIEMBRE 1989 - JUNIO 1994</li>
                        <li>Instituto educación secundaria Fuengirola Nº 1</li>
                    </ul>
                    <ul>
                        <li><b>Educación Basica</b></li>
                        <li>SEPTIEMBRE 1980 - JUNIO 1989</li>
                        <li>Colegio público Andalucía</li>
                    </ul>
                </div>
            </div>
             -->

*/