# Use alpine version to build low weight image

FROM node:21-alpine3.18

# Create directory to store package.json and package-lock.json

WORKDIR /app

# Import package and package-lock

COPY package.json /app/
COPY package-lock.json /app/

# Set variables

ENV DB_HOST="mysql"
ENV DB_USER="test"
ENV DB_PASSWORD="patata123"
ENV DB_DATABASE="testdb"
ENV TOKEN_SECRET="patata"

# Download dependecies

RUN npm install

# Create /app/Backend to import server files

WORKDIR /app/Backend

# Import server files

COPY Backend /app/Backend

# Open port 3000

EXPOSE 3000

# Start server

CMD ["node", "/app/Backend/server.js"]

# Start server with .env
#CMD ["node", "--env-file=/app/.env", "/app/Backend/server.js"]