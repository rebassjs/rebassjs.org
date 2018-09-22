FROM node:10-alpine

WORKDIR /usr/src

COPY package.json .
RUN npm i --only=production

COPY . .
RUN npm run build
RUN mv dist src/card.png src/logo.svg src/icon.png /public
