FROM node:12.7.0-alpine

WORKDIR /app
COPY package.json /app/
COPY App/index.js /app/

RUN npm install 
CMD ["node", "index.js"]
