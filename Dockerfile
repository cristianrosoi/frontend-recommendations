# base image
FROM node:12.2.0
# install chrome for protractor tests
# set working directory
WORKDIR /src
# add `/src/node_modules/.bin` to $PATH
ENV PATH node_modules/.bin:$PATH
# install and cache app dependencies
# COPY package.json /src/package.json
RUN npm install
RUN npm install -g @angular/cli@latest
# add app
COPY . /src
# start app
CMD npm start 