# Use alpine version to build low weight image

FROM node:21-alpine3.18

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

# Create /Backend/app to import server files

WORKDIR /home/node/Backend/app 

# Import server files

COPY app /home/node/Backend/app/

# Change user owner and group owner of the app

RUN chown -R node:node /home/node/Backend

# Set variables

ENV DB_HOST="mysql"
ENV DB_USER="test"
ENV DB_PASSWORD="patata123"
ENV DB_DATABASE="testdb"
ENV TOKEN_SECRET="patata"

# Open port 3000

EXPOSE 3000

# Using user node

USER node

# Start server

CMD ["node", "/home/node/Backend/app/server.js"]
