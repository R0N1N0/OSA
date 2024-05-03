# We use nginx-alpine to build low weight images

FROM nginx:1.25.5-alpine

# Insert conf files

#COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Import web files

COPY src /usr/share/nginx/html

# Volume to store logs

VOLUME ["/var/log/nginx"]

# Expose ports

EXPOSE 80 443