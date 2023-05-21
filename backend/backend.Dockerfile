# Use the official Node.js image as the base
FROM node:16

# Set the working directory in the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the backend code
COPY . .

# Expose the port your backend server will run on
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
