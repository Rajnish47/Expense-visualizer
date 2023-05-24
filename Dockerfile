FROM node:18
RUN mkdir -p /home/node_app
WORKDIR /home/node_app
COPY dist .
RUN npm install serve
CMD [ "serve", "-l", "7000" ]
