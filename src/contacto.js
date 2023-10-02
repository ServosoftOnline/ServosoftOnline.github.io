// AÑADE CONTACTO DE FORMA DINÁMICA

// Obtengo la columna de la izquierda
const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Creo un div y le añado la clase contacto
const contacto = document.createElement('div');
contacto.classList.add('contacto');

// Plantilla
contacto.innerHTML = `
    <h3>Contacto</h3>
    <div class = "contenido">
        <ul>
            <li>
                <i class="fa-solid fa-phone fa-beat" style="color: #06395c;"> </i>
                <p>620890221</p>
            </li>
            <li>
                <i class="fa-solid fa-envelope fa-beat" style="color: #06395c;"> </i>
                <p>oscarfernandezsantiago@gmail.com</p>
            </li>
            <li>
                <i class="fa-solid fa-house fa-beat" style="color: #06395c;"> </i>
                <p>Calle biznaga, 10. Mijas (Málaga)</p>
            </li>
            <li>
                <i class="fa-solid fa-user-group fa-beat" style="color: #06395c;"> </i>
                <p>Casado y con dos niños preciosos</p>
            </li>
        </ul>
    </div>
`;

// Añado al DOM
columnaIzquierda.appendChild(contacto);
