FROM node:16-alpine
WORKDIR /usr/src/app

# ENV NODE_ENV=production

RUN npm install --location=global npm@latest

COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build

CMD node build/index.js