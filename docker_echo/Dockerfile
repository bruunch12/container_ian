FROM ubuntu:14.04
MAINTAINER Ian Choi <bruunch12@gmail.com>

RUN echo 'Acquire::http::proxy "http://12.26.226.2:8080/";' >> /etc/apt/apt.conf
RUN echo 'Acquire::http::proxy "https://12.26.226.2:8080/";' >> /etc/apt/apt.conf
RUN echo 'Acquire::http::proxy "ftp://12.26.226.2:8080/";' >> /etc/apt/apt.conf
RUN echo 'Acquire::http::proxy "socks://12.26.226.2:8080/";' >> /etc/apt/apt.conf


RUN echo exit 0 > /usr/sbin/policy-rc.d
ENV TERM xterm
ENV DEBIAN_FRONTEND=noninteractive

# Run upgrades
RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update

# Install basic packages
RUN apt-get -qq -y install git
RUN apt-get -qq -y install nodejs

RUN git config --global http.proxy "http://12.26.226.2:8080"
#RUN git config --global https.proxy "https://12.26.226.2:8080"
RUN git config --global http.sslVerify "false"

# Install echo server
RUN git clone http://github.com/bruunch12/container_ian.git

EXPOSE 3000
CMD ["node", "./container_ian/echo_nodejs/echo.js"]  
