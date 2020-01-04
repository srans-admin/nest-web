FROM nginx:alpine

WORKDIR /app
 
COPY package.json /app/package.json

COPY ./dist/nest-web/ /usr/share/nginx/html/