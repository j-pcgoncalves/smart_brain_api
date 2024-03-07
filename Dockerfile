FROM node:20-alpine

RUN apk update && apk add bash

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]