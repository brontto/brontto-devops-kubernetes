FROM node:18-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json ./
ADD package.json /usr/src/app/package.json

COPY . . 
EXPOSE 3000

RUN npm install && \
    npm install react-scripts -g && \
    npm run build && \
    npm install -g serve

CMD serve -s build