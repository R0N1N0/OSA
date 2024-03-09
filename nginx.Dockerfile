FROM nginx:latest AS stage1

# Substituir l'arxiu de configuració default per el nostre
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
