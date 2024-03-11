FROM nginx:1.25.4-alpine

# Substituir l'arxiu de configuració default pel nostre arxiu .conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
