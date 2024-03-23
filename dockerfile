FROM node:14

# Set working directory
WORKDIR /app

# Install curl (if needed)
RUN apt-get update && \
    apt-get install -y curl

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update -y && \
    apt-get install -y nodejs

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Expose port (if needed)
# EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
