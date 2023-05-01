#STEP 1 BUILD VE PROJECT
#FROM node:19-alpine3.15 AS build

ARG NODE_VERSION=14-alpine3.14
FROM node:${NODE_VERSION}

RUN apk update && \
    apk add nodejs \
    npm   

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
#
#STEP 2 CREATE NGINX 
# FROM nginx:s AS prod-stage
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

