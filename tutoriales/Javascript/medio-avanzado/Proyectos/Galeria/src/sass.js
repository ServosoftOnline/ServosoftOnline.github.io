/*
- SASS
    
    - Librería o paquete al igual que rollup que permite separar todo el codigo css en diferentes archivos que tendrán la extensión .scss
    - Todos los archivos deben estar en la misma carpeta. en nuestro caso se llama sass
    - index.scss importará el resto de los archivos
        - Ejemplo de importación:
            @use 'generales';
            @use 'hero';
            @use 'categorias';
            @use 'galeria';
            @use 'footer';
    - Cuando modifico un archivo importado debo compilar de nuevo.

    - Instalar sass
        - Sacado desde https://sass-lang.com/install/
        - Formas de instalar. Usaré linea de comandos y Node.js
            - Parar la ejecucion de compilacion automática de rollup si la tenemos abierta mediante Ctrl+C	
            - npm install -g sass. Instalará sass de forma global
            - si añado npx lo instalo de forma local

    - Configuración compilación automatica:
        - Añado a los scripts de package.json esta línea debajo de la de "test"
        - "sass": "sass --watch --style=compressed sass/index.scss public/bundle.css"
            - sass. Paquete a utilizar
            --watch. Quede observando pendiente a cambios
            --style=compressed. Estilo css usado
            sass/index.scss archivo origen que contiene las importaciones
            public/bundle.css archivo destino generado automáticamente

        - Relaciono en index.html el archivo bundle.css generado en el paso anterior
            - <link rel="stylesheet" href="public/bundle.css" />

    - Ejecutar la compilación automatica llamando al script anterior
        - npm run sass ejecuta de forma global
        - npx npm run sass de forma local
    - Probarlo
        - Modificar un archivo de los que son importados en index.scss y ver si se modifica automaticamente en index.html              


*/