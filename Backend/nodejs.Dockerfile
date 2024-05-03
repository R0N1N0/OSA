# We use nginx-alpine to build low weight images

FROM node:20.12.2-alpine3.18

# Set node user and group ID

RUN deluser node && \
    addgroup -g 1050 node && \
    adduser -D -u 1050 -G node node

# Create directory to store package.json and package-lock.json

WORKDIR /home/node/Backend

# Import package and package-lock

COPY package.json /home/node/Backend
COPY package-lock.json /home/node/Backend

# Download dependecies

RUN npm install

# Create app directory to import server files

WORKDIR /home/node/Backend/app 

# Import server files

COPY app /home/node/Backend/app/

# Change user owner and group owner of the app

RUN chown -R node:node /home/node/Backend

# Set default variables variables

ENV DB_HOST="private-db-mysql-ams3-15309-do-user-16371565-0.c.db.ondigitalocean.com"
ENV D_PORT=25060
ENV DB_USER="bassou"
ENV DB_DATABASE="db_proyect"

ENV DB_PASSWORD="patata123"
ENV TOKEN_SECRET="patata"

# Open port 3000

EXPOSE 3000

# Using user node

USER node

# Start server

CMD ["node", "/home/node/Backend/app/server.js"]
