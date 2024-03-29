FROM node:16.10-alpine

WORKDIR /var/node

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY tsconfig.json tsconfig.json

RUN npm i

COPY ./src /var/node/src

RUN npx tsc

CMD [ "npm", "run", "start:dev"]