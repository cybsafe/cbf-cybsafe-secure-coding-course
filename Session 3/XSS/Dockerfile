FROM node:18 as base 

WORKDIR /app

ADD ./ /app

## client

FROM base as client
WORKDIR /app/client
RUN cd /app/client && npm install 

## server

FROM base as server
WORKDIR /app/server
RUN cd /app/server && npm install 
