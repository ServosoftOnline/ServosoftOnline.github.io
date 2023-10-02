// AÑADE LAS TITULACIONES DE FORMA DINÁMICA
const columnaIzquierda = document.querySelector('.columnaIzquierda');
const titulacion = document.createElement('div');
titulacion.classList.add('titulacion');

titulacion.innerHTML = `
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
`;

columnaIzquierda.appendChild(titulacion);

