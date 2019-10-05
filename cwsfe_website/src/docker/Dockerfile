FROM node AS build_cwsfe_website
WORKDIR /cwsfe_website
COPY . /cwsfe_website
#optional build by nodejs, minimification, gziping, etc..
RUN rm -Rf build.gradle package.json build;

FROM nginx:1.17.4
COPY --from=build_cwsfe_website /cwsfe_website /var/www/cwsfe_website
COPY src/docker/nginx.conf /etc/nginx/nginx.conf
COPY src/docker/default.conf /etc/nginx/conf.d/default.conf
COPY src/docker/devcwsfe.pl/cert.pem /etc/nginx/devcwsfe.pl.cert.pem
COPY src/docker/devcwsfe.pl/key.pem /etc/nginx/devcwsfe.pl.key.pem
EXPOSE      80 433 8080
#RUN nginx -g 'daemon off;'
