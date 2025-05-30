// Muestra el perfil profesional de forma dinámica

const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Div con los textos
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1> 

    <div class="enlaceAlCurriculum">
        <a 
            href="./public/cv.pdf" 
            download="CV_OscarFernandezSantiago.pdf" 
            class="boton-cv">
            Descargar Currículum
        </a>
    </div>
  
    <h3>Perfil profesional</h3>    
`;
columnaIzquierda.appendChild(perfil);

// div con la descripción
const contenidoPerfil = document.createElement('div');
contenidoPerfil.setAttribute('class', 'contenido');
contenidoPerfil.innerHTML = `
    <p>
        <h4>Soy técnico superior en Administración de Sistemas Informáticos en red (ASIR).</h4>
        <p>Tengo amplia experiencia en los sectores de telecomunicaciones, desarrollo de aplicaciones, sistemas de seguridad e informática. </p>
    </p>
`;
perfil.appendChild(contenidoPerfil);
