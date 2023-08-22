FROM node

WORKDIR /react-docker

COPY ./package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 8082

CMD [ "npm", "run", "dev" ]
