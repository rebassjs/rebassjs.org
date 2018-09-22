FROM node:10-alpine

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .
RUN npm i --only=production

COPY . .
RUN npm run build
COPY dist src/card.png src/logo.svg src/icon.png /public
