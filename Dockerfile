# Use the official Node.js image as the base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Cloud Run expects
EXPOSE 8080

# Set environment variable for Next.js to use the correct port
ENV PORT 8080

# Start the Next.js app -test
CMD ["npm", "start", "-p", "8080"]
