# Base image with Node.js and npm
FROM node:21-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Build with Vite
RUN npm run build

# Final image (for serving)
FROM nginx:latest

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose static web server port
EXPOSE 5417

# Serve the built React app
CMD ["nginx", "-g", "daemon off;"]
