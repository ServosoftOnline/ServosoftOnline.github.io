<?php
    
    /* 
        Establecezco la conexion con la base de datos mediante un objeto:
            - Esto me permitirá realizar consultas preparadas evitando ataques de inyeccion SQL            
            - Así podre usar prepare y bind_param en las consultas

            - En localhost podremos poner la ip donde se encuentra la base de datos.
                - Quizas deba cambiarlo cuando pase a produccion
            
            - root es el usuario por defecto que crea xampp
            - tareas_crud es el nombre de la base de datos que cree en myphpadmin

            Configuro que php pueda leer variables de entorno
    */

    // Habilitar CORS para aceptar solicitudes desde cualquier origen
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header('Content-Type: application/json');

    // Configuración de la base de datos usando variables de entorno
    $servername = getenv('VITE_DB_HOST') ?: 'localhost';
    $username = getenv('VITE_DB_USER') ?: 'root';
    $password = getenv('VITE_DB_PASSWORD') ?: '';
    $dbname = getenv('VITE_DB_NAME') ?: 'tareas_crud';

    // Mostrar mensaje de depuración
    // echo "Intentando conectar a la base de datos...\n";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Mostrar mensaje de éxito
    // echo "Conexión exitosa a la base de datos.\n";

?>