import {Titulo} from "./Titulo.js";

const Usuario = () => {
  const pais = "España";
  const amigos = ['David', 'Pedro', 'Ariel'];
    return (
        <div>
            <Titulo usuario = "Óscar" color = "red"/>
            <Titulo usuario = "César" color = "green" />
            <Titulo />         
            {pais && <p>Tu pais es {pais}</p>}
            <p>Tus amigos son:</p>
            <ul>
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
        </div>
    );
}

export default Usuario;

/* 
// FORMA 1: CONDICIONALES EN JAVASCRIPT
const JSX = (
  <>
    <h1 className = "titulo" style = {{color: color}}> Hola {nombre}</h1>
  </>
);

const verificarSesion = (sesion) => {
  if (sesion === true) {
    return JSX;
  } else {
    return <h1>No has iniciado sesion</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {verificarSesion(sesion)}    
  </React.StrictMode>
);
*/