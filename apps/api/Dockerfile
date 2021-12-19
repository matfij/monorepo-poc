#
# Development
#

FROM node:14-alpine AS development

ARG BACKEND_SRC=/dh/src/app/backend

WORKDIR ${BACKEND_SRC}

COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE ${PORT}
