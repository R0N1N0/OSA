# Agafem la versió alpine ja que és una distribució basada en busybox molt lleugera.
FROM nginx:1.25.4-alpine

# Substituir l'arxiu de configuració default pel nostre arxiu .conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
