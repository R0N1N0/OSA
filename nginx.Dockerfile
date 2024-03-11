FROM nginx:latest AS stage1

# Substituir l'arxiu de configuració default pel nostre arxiu .conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
