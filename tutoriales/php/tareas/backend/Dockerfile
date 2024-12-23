# Usar una imagen base de PHP con Apache
FROM php:8.2-apache

# Copiar los archivos del backend al contenedor
COPY . /var/www/html/

# Establecer permisos para los archivos
RUN chown -R www-data:www-data /var/www/html/ \
    && chmod -R 755 /var/www/html/

# Exponer el puerto 80 para Apache
EXPOSE 80
