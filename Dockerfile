# # Use Node.js 22 (LTS) as the base image
# FROM node:22-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files first (for better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all project files
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Expose the app port
# EXPOSE 3000

# # Start the Next.js app
# CMD ["npm", "start"]

# Use Node.js 22 (LTS)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
