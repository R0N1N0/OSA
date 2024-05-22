# Offensive Security Academy (OSA)

Este repositorio consiste en un trabajo de final de grado enfocado a simular la creación de una empresa enfocada en ciberseguridad. La actividad principal de esta empresa consiste en hacer una página web en la cual los usuarios podrán descargar CTFs (Capture The Flag), y leer tutoriales gratuitos o de pago. De esta manera los usuarios aprenderán técnicas de reconocimiento, análisis de vulnerabilidades, explotación, encriptación y temas relacionados con la ciberseguridad en general.

## Estructura del proyecto

Hemos decidido repartir el trabajo principalmente en los siguientes 3 sub-apartados.

## Workflow status:

Custom Docker Images
Nginx: [![nginx-publish](https://github.com/R0N1N0/OSA/actions/workflows/nginx-publish.yml/badge.svg)](https://github.com/R0N1N0/OSA/actions/workflows/nginx-publish.yml).
Nodejs: [![nodejs-publish](https://github.com/R0N1N0/OSA/actions/workflows/nodejs-publish.yml/badge.svg)](https://github.com/R0N1N0/OSA/actions/workflows/nodejs-publish.yml).

## ¿Cómo usarlo?

- Para trabajar en local, tienes que poner un archivo .env en el directorio con las variables de entorno que usa nodeJS en el docker-compose.yml.

### Variables de entorno requeridas

* DB_HOST
* DB_PORT
* DB_DATABASE
* DB_USER
* DB_PASSWORD
* DB_PASSWORD1
* DB_PASSWORD2
* TOKEN_SECRET1
* TOKEN_SECRET2
* CLOUD_NAME
* API_KEY
* API_SECRET1
* API_SECRET2

Los secretos largos están divididos en dos, ya que puede dar problemas en el deployment en Kubernetes, ya que al convertirlo en base64 tiene una cantidad de carácteres que algunos sistemas operativos no pueden almacenar en una variable de entorno.
El DB_PASSWORD es para el MYSQL, y el DB_PASSWORD1 y DB_PASSWORD2 es para el Backend.

### ¿Cómo montar los contenedores?

Importante, hace falta cambiar el URL en el archivo Frontend/src/js/helpers/Generalrequests.js y modificar la variable baseUrl hacia el backend, en el caso de Docker, sería http://nodejs:3000/

- Seguidamente para crear los contenedores pon el siguiente comando:

```bash
docker-compose --env-file ".env" up -d
```

### Página web

Lo esencial del proyecto es la página web, la página web está formada de un front-end hecho con HTML 5 i CSS 3, junto a Tailwind. El backend está pensado con el uso de JavaScript y NodeJS, junto con ExpressJS.
En la página web habrán las actividades de las CTF, en la cual podrás descargar un archivo .OVA y explotar la máquina virtual para obtener un código, ese código podrán canjearlo para obtener puntos.

Otra parte muy importante de la página web son los tutoriales, así los más nuevos podrán consultar dudas comunes y algunos métodos de explotación. Algunos serán esenciales para poder explotar máquinas de manera exitosa y completar los CTF.

Y finalmente, un apartado donde podrás canjear los puntos, por cursillos o por premios.

### Estructura

Hemos decidido estructurar el repositorio basado en docker, es decir, en microservicios ya que nos aporta escalabilidad tanto horizontal como vertical y portabilidad. Para trabajar con microservicios, hemos dividido cada microservicio en una carpeta.

1. Frontend
2. Backend
3. Database

En estos directorios, están los Dockerfiles y los archivos para crear los contenedores para probar y montar los servicios

#### Frontend

En este directorio, tenemos el Dockerfile, los archivos de configuración y el directorio donde montamos la página web en el contenedor, es decir, "/usr/share/nginx/html".

Usamos un Nginx-alpine para ahorrar espacio y además por la integración con Ingress con el módulo nginx-ingress.

Puedes modificar lso archivos de nginx.conf y default.conf para tener una personalización a tu gusto, en el archivo Frontend\src\js\helpers\Generalrequests.js hay que modificar la variable baseUrl hacia el backend, un ejémplo: 

```js
const baseUrl = "http://nodejs:3000/";
```