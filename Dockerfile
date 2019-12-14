FROM nginx:alpine

WORKDIR /app
COPY ./public_html/ ./dist/
COPY package.json /app/package.json

COPY ./public_html /usr/share/nginx/html/