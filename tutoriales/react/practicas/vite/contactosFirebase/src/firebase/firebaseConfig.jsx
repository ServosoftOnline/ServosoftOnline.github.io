// Importo la función que inicia firebase
import { initializeApp } from "firebase/app";

// importo la funcion que inicia el servicio de firestore database.
import { getFirestore } from "firebase/firestore";



// Link hacia los servicios de firebase disponibles para la Web lo cuales puedo añadir a mi proyecto
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto de configuración. Contiene las llaves que me identifican como dueño de la app
// Esta oculto mediante vbles de ambiente. Describo los detalles de como hacerlo en .env.local
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Iniciar Firebase. Le pasa el objeto de configuracion y devuelve un objeto app con informacion de nuestra app
const app = initializeApp(firebaseConfig);

// Me conecto a la base de datos y devuelve un objeto para poder usarla
const db = getFirestore();

// Exporto el objeto con la base de datos
export default db;

