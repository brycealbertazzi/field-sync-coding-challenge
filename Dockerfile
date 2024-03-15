# Use the official Node.js image as base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files from the 'server' directory to the working directory
COPY server/ ./server/

# Expose the port your app runs on
EXPOSE 5000

# Command to run your app
CMD ["npm", "run", "server"]
