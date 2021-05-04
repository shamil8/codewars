FROM node:15-alpine

ADD . /app
WORKDIR /app

RUN yarn install

ENTRYPOINT ["yarn", "dev"]
