FROM nginx:latest AS stage1 # Agafem la imatge de NGINX més nova

# Substituir l'arxiu de configuració default pel nostre arxiu .conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
