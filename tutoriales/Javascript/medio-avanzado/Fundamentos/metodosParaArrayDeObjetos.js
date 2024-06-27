/*
find:

    Devuelve el primer objeto que cumple con la condición.
    Si no se encuentra ningún objeto, devuelve undefined.

some:

    Devuelve true si al menos un objeto cumple con la condición.
    Si no se encuentra ningún objeto que cumpla con la condición, devuelve false.
*/

// Ejemplo de Uso de find en un Array de Objetos

const users = [
    { id: 1, username: 'johndoe', email: 'john@example.com' },
    { id: 2, username: 'janedoe', email: 'jane@example.com' },
    { id: 3, username: 'admin', email: 'admin@example.com' }
];

// Usando find para buscar un usuario por su username
const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

// Ejemplo de uso
const usernameToFind = 'janedoe';
const user = findUserByUsername(usernameToFind);

if (user) {
    console.log(`Usuario encontrado: ${user.username}, Email: ${user.email}`);
    } else {
    console.log('Usuario no encontrado');
    }

// Ejemplo de Uso de some en un Array de Objetos
  
  // Usando some para comprobar si existe un usuario con un username específico
  const doesUserExist = (username) => {
    return users.some(user => user.username === username);
  };
  
  // Ejemplo de uso
  const usernameToCheck = 'janedoe';
  const exists = doesUserExist(usernameToCheck);
  
  if (exists) {
    console.log(`El usuario ${usernameToCheck} existe en el array.`);
  } else {
    console.log(`El usuario ${usernameToCheck} no existe en el array.`);
  }