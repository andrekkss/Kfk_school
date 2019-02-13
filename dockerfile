FROM node:alpine

WORKDIR /usr/kfk_app

COPY package*json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]