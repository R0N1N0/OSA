FROM nginx:latest

# Substituir l'arxiu de configuració default per el nostre
COPY ./conf/nginx.conf /etc/nginx/nginx.conf