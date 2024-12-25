# PRIMERA CONFIGURACION. CONFIGURACION INICIAL
# Usar una imagen base de PHP con Apache
# FROM php:8.2-apache

# Copiar los archivos del backend al contenedor
# COPY . /var/www/html/

# Establecer permisos para los archivos
# RUN chown -R www-data:www-data /var/www/html/ \
#    && chmod -R 755 /var/www/html/

# Exponer el puerto 80 para Apache
# EXPOSE 80

# SEGUNDA CONFIGURACION: AÑADI LA POSIBILIDAD QUE RENDER DETECTE LOS ARCHIVOS CON ESTENSION .JSX
# Usar una imagen base de PHP con Apache
# FROM php:8.2-apache

# # Habilitar mod_rewrite para Apache. Necesario para redirigir rutas no existentes al index.html, útil si usas React Router.
# RUN a2enmod rewrite

# # Copiar los archivos del backend al contenedor
# COPY . /var/www/html/

# # Establecer permisos para los archivos
# RUN chown -R www-data:www-data /var/www/html/ \
#     && chmod -R 755 /var/www/html/

# # Configurar tipos MIME para archivos .jsx y otros: para que Apache interprete correctamente estos archivos como JavaScript.
# RUN echo 'AddType application/javascript .jsx' >> /etc/apache2/apache2.conf \
#     && echo 'AddType application/javascript .js' >> /etc/apache2/apache2.conf \
#     && echo 'AddType text/css .css' >> /etc/apache2/apache2.conf

# # Configurar .htaccess para rutas amigables (opcional, si usas React Router)
# RUN echo '<IfModule mod_rewrite.c>\n\
# RewriteEngine On\n\
# RewriteCond %{REQUEST_FILENAME} !-f\n\
# RewriteCond %{REQUEST_FILENAME} !-d\n\
# RewriteRule ^ index.html [L]\n\
# </IfModule>' > /var/www/html/.htaccess

# # Exponer el puerto 80 para Apache
# EXPOSE 80

# TERCERA CONFIGURACION: ajuste para evitar que el servidor devuelva página HTML. Debe intepretarlo como lenguaje javascript y le indico que uso vite
# Usar una imagen base de Node.js para construir el frontend
FROM node:18 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del frontend al contenedor
COPY . .

# Instalar dependencias y construir el proyecto
RUN npm install && npm run build

# Usar una imagen base de PHP con Apache para servir el backend y los archivos construidos
FROM php:8.2-apache

# Copiar los archivos construidos al directorio público de Apache
COPY --from=build /app/dist /var/www/html/

# Copiar los archivos del backend al contenedor
COPY ./backend /var/www/html/backend/

# Configurar tipos MIME y permisos
RUN a2enmod rewrite \
    && chown -R www-data:www-data /var/www/html/ \
    && chmod -R 755 /var/www/html/ \
    && echo 'AddType application/javascript .jsx' >> /etc/apache2/apache2.conf

# Configurar .htaccess para rutas amigables (si es necesario)
RUN echo '<IfModule mod_rewrite.c>\n\
RewriteEngine On\n\
RewriteCond %{REQUEST_FILENAME} !-f\n\
RewriteCond %{REQUEST_FILENAME} !-d\n\
RewriteRule ^ /index.html [L]\n\
</IfModule>' > /var/www/html/.htaccess

# Exponer el puerto 80 para Apache
EXPOSE 80


