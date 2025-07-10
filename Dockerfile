# Use the official Node.js 20 image as a parent image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the Next.js application
EXPOSE 3000

# The command to run the application
CMD ["npm", "run", "dev"]
