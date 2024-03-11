# Agafem la versió alpine ja que és una distribució basada en busybox molt lleugera.
FROM nginx:1.25.4-alpine AS nginx-custom

# Substituir l'arxiu de configuració default pel nostre arxiu .conf del directori conf.
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
