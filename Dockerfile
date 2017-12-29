FROM node:6-slim

COPY . /var/www/kankrai
WORKDIR /var/www/kankrai

RUN yarn install
CMD npm run start
