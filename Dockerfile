# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY BackEnd/package*.json ./

# Install the dependencies in the image
RUN npm install

# Copy the remaining files to the image
COPY BackEnd BackEnd/
COPY FrontEnd FrontEnd/

EXPOSE 8000

# Specify the command to run when the image starts
CMD ["npm", "run", "start"]

