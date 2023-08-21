FROM node

WORKDIR /react-docker

COPY ./package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm", "run", "dev" ]
