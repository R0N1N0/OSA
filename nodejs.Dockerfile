# Use alpine version to build low weight image
FROM node:21-alpine3.18

# Create directory to store package.json and package-lock.json
WORKDIR /app

# Import files
COPY package.json package.json
COPY package-lock.json package-lock.json

# Download express 
RUN npm install express

# Download dependecies
RUN npm install

# Import server files
COPY Backend /app/Backend

# Start server
CMD ["node", "/app/Backend/server.js"]

# Open port 3000
EXPOSE 3000