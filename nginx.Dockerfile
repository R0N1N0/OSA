# We use nginx-alpine to build low weight images
FROM nginx:1.25.4-alpine AS nginx-custom

# Swap default conf to custom default.conf
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

# Import web files
COPY Frontend /usr/share/nginx/html

# Volume to store logs
VOLUME ["/var/log/nginx"]

# Expose ports
EXPOSE 80 443