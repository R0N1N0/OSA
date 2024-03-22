# Offensive Security Academy (OSA)

Este repositorio consiste en un trabajo de final de grado enfocado a simular la creación de una empresa enfocada en ciberseguridad. La actividad principal de esta empresa consiste en hacer una página web en la cual los usuarios podrán descargar CTFs (Capture The Flag), y leer tutoriales gratuitos o de pago. De esta manera los usuarios aprenderán técnicas de renocimiento, análisis de vulnerabilidades, explotación, encriptación y temas relacionados con la ciberseguridad en general.

## Estructura del proyecto

Hemos decidido repartir el trabajo principalmente en los siguientes 3 sub apartados.

## Workflow status:

Custom Docker Images
Mysql: [![mysql-image](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml/badge.svg)](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml).
Nginx: [![nginx-image](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml/badge.svg)](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml).
Nodejs: [![nodejs-image](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml/badge.svg)](https://github.com/R0N1N0/OSA/actions/workflows/main-publish.yml).

## ¿Como usarlo?

- Para trabajar en local, tienes que poner un archiv .env en el directorio [conf](https://github.com/R0N1N0/OSA/tree/main/conf) con las variables de entorno que usa nodeJS y mysql en el docker-compose.yml.

- Seguidamente para crear los contenedores pon el siguiente comando:

```bash
docker-compose --env-file "./conf/.env" up -d
```

### Página web

Lo esencial del proyecto es la página web, la página web está formada de un front end hecho con Html 5 i CSS 3. El backend está pensado con el uso de JavaScript y NodeJS.
En la página web habrán las actividades de las CTF, en la qual podrás descargar un archivo .OVA y explotar la máquina virtual para obtener un código, ese código podrán canjearlo para obtener puntos.

Otra parte muy importante de la página web son los tutoriales, así los más nuevos podrán consultar dudas comunes y algunos métodos de explotación. Algunos serán esenciales para poder explotar máquinas de manera exitosa y completar los CTF.

Y finalmente, un apartado donde podrás canjear los puntos, por cursillos o por premios.

### Estructura

Hemos decidido estructurar el repositorio basado en docker, es decir, en microservicios. Para poder crear los

### CTFs y cursillos
