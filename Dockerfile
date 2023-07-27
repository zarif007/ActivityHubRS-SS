FROM node:18.0-alpine
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 5000
CMD npm start 