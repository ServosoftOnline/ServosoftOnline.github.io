// Muestra el perfil profesional de forma dinámica

const columnaIzquierda = document.querySelector('.columnaIzquierda');
const perfil = document.createElement('div');
perfil.classList.add('perfil');
perfil.innerHTML = `
    <h1>Óscar Fernández Santiago</h1>
    <h2>Desarrollador de aplicaciones Fullstack</h2>
    <h3>Perfil profesional</h3>
    <p>
        Soy técnico superior en Administracion de Sistemas Informáticos Monousuario y Multiusuario.
        Desde que me titulé en 1998 he trabajado siempre en el sector de la informática, telecomunicaciones
        y desarrollo de aplicaciones.
    </p>
`;

columnaIzquierda.appendChild(perfil);