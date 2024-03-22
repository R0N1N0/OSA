# Use alpine version to build low weight image

FROM node:21-alpine3.18

# Create directory to store package.json and package-lock.json

WORKDIR /Backend

# Import package and package-lock

COPY package.json /Backend/
COPY package-lock.json /Backend/

# Download dependecies

RUN npm install

# Create /Backend/app to import server files

WORKDIR /Backend/app

# Import server files

COPY app /Backend/app/

# Set variables

ENV DB_HOST="mysql"
ENV DB_USER="test"
ENV DB_PASSWORD="patata123"
ENV DB_DATABASE="testdb"
ENV TOKEN_SECRET="patata"

# Open port 3000

EXPOSE 3000

# Start server

CMD ["node", "/Backend/app/server.js"]
