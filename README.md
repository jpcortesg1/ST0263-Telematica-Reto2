# INFO DE LA MATERIA: ST0263231
#
# Estudiante: Juan Pablo Cortes Gonzalez
#
# Profesor: Edwin Montoya
#
# RETO 2
# Comunicación MOM y GRPC
#
# 1. Descripción
Nuestro servicio de comunicación de API Gateway conecta dos servicios para listar y buscar archivos, utilizando RabbitMQ como MOM y gRPC para la comunicación. Ofrecemos una solución segura y eficiente, con características adicionales como autenticación y autorización de usuarios, gestión de errores y recuperación de fallas.

## 1.2. Que no cumplio.
Comunicación por GRCP.
#
# 2. información general de diseño de alto nivel, arquitectura, patrones, mejores prácticas utilizadas.
Se separon los tres servicios.
Se hizo una estructura con docker para manejar en local y correr el proyecto con un comando.
También se manejo la raiz de los proyectos por los archivos básicos e iniciales del proyecto y toda la logica esta dentro de las carpetas SRC.
#
# 3. Descripción del ambiente de desarrollo y técnico.
Para la creación de los servicios se utilizo nodejs, express, grcp, grpc/grpc-js, @grpc/proto-loader, nodemon y amqplib.
Para ejecutar el proyecto solo se debe correr el comando
Se debe tener instalado docker y docker compose.

``
Docker compose up
``

El proyecto aún no está disponible en la nube debido a la complejidad que se presentó en la creación del servicio con GRCP, debido a la falta de algunos componentes y limitaciones de tiempo. Sin embargo, te comento que el proyecto está funcionando de manera local, por lo que si deseas acceder a él, solo debes correr "docker compose up".

Una vez que lo hayas ejecutado, podrás visitar localhost y encontrarás dos endpoints disponibles:

/ : Este endpoint te permitirá listar todos los archivos disponibles en el sistema.

/:nombre_archivo : Este endpoint te permitirá buscar un archivo específico en el sistema, solo debes proporcionar el nombre del archivo que deseas buscar.