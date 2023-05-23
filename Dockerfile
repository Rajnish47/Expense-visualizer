FROM ubuntu:20.04
RUN mkdir -p /home/node_app
WORKDIR /home/node_app
COPY dist .
CMD [ "/bin/bash" ]

