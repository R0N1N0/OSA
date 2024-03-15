# Use alpine version to build low weight image
FROM node:21-alpine3.18

# Create directory to store package.json and package-lock.json
WORKDIR /Backend

# Import files
COPY package.json package.json
COPY package-lock.json package-lock.json
#COPY .env /Backend/

# Download dependecies
RUN npm install

# Import server files
COPY Backend /Backend

# Start server
CMD ["node", "--env-file=.env", "/Backend/server.js"]

# Open port 3000
EXPOSE 3000