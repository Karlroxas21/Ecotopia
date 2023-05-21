# Use the official Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the frontend code
COPY . .

# Expose the port your frontend app will run on
EXPOSE 4200

# Start the frontend server
CMD ["npm", "start"]
