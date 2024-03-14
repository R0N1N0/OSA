# We use nginx-alpine to build low weight images
FROM nginx:1.25.4-alpine AS nginx-custom

# Swap default conf to custom default.conf
#COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

# Clear the DocumentRoot
RUN rm -rf /usr/share/nginx/html/*

# Import web files
COPY Frontend /usr/share/nginx/html

# Open ports for HTTP and HTTPS
EXPOSE 80

# Volume to store logs
VOLUME ["/var/log/nginx"]