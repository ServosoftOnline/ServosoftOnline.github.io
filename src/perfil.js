// Muestra el perfil profesional de forma dinámica

const columnaIzquierda = document.querySelector('.columnaIzquierda');

// Div con los textos
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1>
    <h2>Desarrollador de aplicaciones Fullstack</h2>
    <h3>Perfil profesional</h3>    
`;
columnaIzquierda.appendChild(perfil);

// div con la descripción
const contenidoPerfil = document.createElement('div');
contenidoPerfil.setAttribute('class', 'contenido');
contenidoPerfil.innerHTML = `
    <p>
        <h4>Soy técnico superior en Administracion de Sistemas Informáticos en red. Ciclo formativo superior</h4>
        <p>Desde que me titulé en 1998 he trabajado siempre en el sector de la informática, telecomunicaciones
        y desarrollo de aplicaciones. </p>
    </p>
`;
perfil.appendChild(contenidoPerfil);
