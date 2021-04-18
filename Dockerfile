FROM node:14 AS builder

WORKDIR /src

COPY package*.json ./
RUN npm install -g npm
RUN npm install

COPY . .
RUN npm run generate

FROM httpd:alpine
COPY --from=builder /src/dist /usr/local/apache2/htdocs/



