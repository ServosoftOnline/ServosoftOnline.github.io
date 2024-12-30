<?php

    // Mostrar el contenido de las variables de entorno
    echo "VITE_DB_HOST: " . getenv('VITE_DB_HOST') . "\n";
    echo "VITE_DB_USER: " . getenv('VITE_DB_USER') . "\n";
    echo "VITE_DB_PASSWORD: " . getenv('VITE_DB_PASSWORD') . "\n";
    echo "VITE_DB_NAME: " . getenv('VITE_DB_NAME') . "\n";
    
    // index.php. Fue oblitario crearlo para subir el crud a Render
    echo "Backend is running";
?>
