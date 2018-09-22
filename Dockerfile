FROM node:10-alpine

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .
RUN npm i --only=production

COPY . .
RUN npm run build && mv dist /public
# RUN mv dist src/card.png src/logo.svg src/icon.png /public
