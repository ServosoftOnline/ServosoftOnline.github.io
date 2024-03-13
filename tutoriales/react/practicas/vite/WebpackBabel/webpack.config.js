/*
  CONFIGURACION WEBPACK

    - El archivo ha sido obtenido desde la documentacion en el sitio:
      - https://webpack.js.org/guides/getting-started/#using-a-configuration
      - entry indica el archivo de entrada
      - output indica:
        - filename el nombre del archivo ya compilado con el resultado de la empaquetación
        - path es la ruta indicada en node.js donde creará la carpeta indicada, en este caso public, donde se almacenará el archivo.
        

*/

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};