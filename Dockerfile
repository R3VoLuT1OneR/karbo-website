FROM node:14 AS builder

WORKDIR /src

COPY package*.json ./
RUN npm install -g npm
RUN npm install

COPY . .
RUN npm run generate

FROM httpd:alpine

RUN sed -i '/LoadModule expires_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule mime_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    echo $'\
<FilesMatch "\.(png|jp?g|gif|ico|mp4|wmv|mov|mpeg|css|map|woff?|eot|svg|ttf|js|json|pdf|csv)">\n\
    ExpiresActive on\n\
    ExpiresDefault "access plus 1 year"\n\
</FilesMatch>' >> /usr/local/apache2/conf/httpd.conf

COPY --from=builder /src/dist /usr/local/apache2/htdocs/



