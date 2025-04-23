FROM node:18

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy built app and necessary files
COPY public public
COPY next.config.ts next.config.ts
COPY package.json package.json
COPY .next .next

EXPOSE 8080
ENV PORT=8080

CMD ["npm", "start", "--", "-p", "8080"]