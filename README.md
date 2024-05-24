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

### Variables de entorno requeridas en archivo .env

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

### Variables de entorno requeridas en el docker-compose.yml

* MYSQL_DATABASE
* MYSQL_USER
* DB_HOST
* DB_USER
* DB_DATABASE

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

Puedes modificar lso archivos de nginx.conf y default.conf para tener una personalización a tu gusto, en el archivo "Frontend\src\js\helpers\Generalrequests.js" hay que modificar la variable baseUrl hacia el backend, un ejémplo: 

```js
const baseUrl = "http://nodejs:3000/";
```

#### Backend

En el Backend usamos una imagen de NodeJS en alpine para ahorrar espácio, y usamos la última version LTS y funciona "rootless", por la regla del "least previlege". Se guardan todos los archivos del servidor en la carpeta home del usuario node, se instalan las dependencias del package.json, y finalmente se importan los archivos de la carpeta Backend/app y se ejecuta el comando:
```bash
node /home/node/Backend/app/server.js
```

#### Base de datos

Hemos usado una imagen de mysql-bookworm para hacer una imagen más ligera, solo importa los archivos de la carpeta "Database/docker-entrypoint-initdb.d" en "/docker-entrypoint-initdb.d" del contenedor para importar toda la configuración de la base de datos.

## Qué es la carpeta Kubernetes?

Los archivos yaml de esta carpeta son usados como plantilla para crear un deployment completo con DigitalOcean con SSL/TLS, solo faltaría un archivo secrets.yaml para añadir los credenciales que estarían en un .env para el docker-compose.yml.

### nginx-app.yaml

En este archivo está al configuración del deployment de 3 pods de Nginx, y el service que usa la api de DigitalOcean para crear un loadbalancer de un nodo. Hay configuración muy interesante que recomiendo revisar como forzar el https.

### nodejs-app.yaml

Este archivo contiene la configuración de un deployment de 3 pods de NodeJS con los secretos y configmap montado con secretos y variables de entorno. A parte tiene también la configuración de un service con la api de DigitalOcean para así crear un loadbalancer de un nodo, que fuerza la conexión con SSL/TLS.

### configmap.yaml

El fichero config.yaml solo contiene variables que usa nodejs-app.yaml pero no son tan relevantes, por ejémplo, el host de la base de datos no es un secreto, ya que tiene un firewall que solo permite conexiones desde el clúster de Kubernetes.

### secrets.yaml

Este archivo contiene secretos codificados en base64, y necesita las siguientes variables:
* DB_PASSWORD1
* DB_PASSWORD2
* TOKEN_SECRET1
* TOKEN_SECRET2
* CLOUD_NAME
* API_KEY
* API_SECRET1
* API_SECRET2

### ingress.yaml

El fichero ingress.yaml se encarga de crear un ingress (se necesita instalar el módulo de nginx-ingress-controller) que permite la conexión desde el exterior hacia nuestros recursos con un dominio o URL, también es esencial, ya que es el que maneja las conexiones HTTPS y SSL.

### cert-manager.yaml

En este archivo, se añade la configutación de la encriptación de los certificados, los proveedores del certificado y nombres DNS de tus servicios.
Ejémplo:
```yaml
    dnsNames:
    - osaproject.es
    - www.osaproject.es
    - nodejs.osaproject.es
```
