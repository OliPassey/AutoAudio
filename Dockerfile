# Use a base image
FROM node:20-bullseye

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables for MongoDB IP and port
ENV MONGO_IP=10.0.3.12
ENV MONGO_PORT=27017

# Expose the port your application is listening on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
