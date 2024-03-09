FROM node:latest

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

WORKDIR /Backend

ADD Backend/* .

CMD [ "node", "/Backend/server.js" ]