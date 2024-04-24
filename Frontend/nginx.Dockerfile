# We use nginx-alpine to build low weight images

FROM nginx:1.25.4-alpine AS nginx-custom

# Insert conf files

#COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Import web files

COPY src /usr/share/nginx/html

# Install dependencies

WORKDIR /usr/share/nginx/html

RUN apk add --update --no-cache nodejs npm && npm install

# Volume to store logs

VOLUME ["/var/log/nginx"]

# Expose ports

EXPOSE 80 443