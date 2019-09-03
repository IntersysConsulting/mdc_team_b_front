# stage: 1
FROM node:12.9.0 as react-build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . ./
RUN npm run build

# stage: 2 — the production environment
FROM nginx:alpine
COPY ./build /var/www
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

#CMD ["nginx", "-g", "daemon off;"]
