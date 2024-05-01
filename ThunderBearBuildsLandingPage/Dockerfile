# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3000, make sure the container does too
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "main.js"]
