FROM node:12.7.0-alpine

WORKDIR /app
COPY package.json /app/
COPY App/index.js /app/
COPY App/index.html /app/

EXPOSE 3000

RUN npm install 
CMD ["node", "index.js"]
