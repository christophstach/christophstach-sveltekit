FROM node:16-alpine
WORKDIR /usr/src/app

RUN npm install --location=global npm@latest

COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

ENV NODE_ENV=production
CMD node build/index.js