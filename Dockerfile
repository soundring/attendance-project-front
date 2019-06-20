FROM node:12.4.0
RUN apt-get update -y &&     apt-get install git &&     npm i vue-cli eslint -g
env NUXT_HOST 0.0.0.0
WORKDIR /src
