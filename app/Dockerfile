FROM node:alpine3.14 AS build

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm i

COPY . .

RUN npm run build --prod

EXPOSE 3002

CMD ["node", "server.js"]