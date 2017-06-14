FROM mesoscloud/mesos-slave


WORKDIR /root/

ENV http_proxy="http://12.26.226.2:8080/"
ENV https_proxy="http://12.26.226.2:8080/"
ENV SPARK_HOME="/root/spark-1.6.3-bin-hadoop2.6"
ENV LIBPROCESS_IP=10.3.20.1
RUN yum -y -qq install java-1.8.0-openjdk-devel.x86_64

COPY . /root/

expose 1200
#CMD ["./gotty", "-w", "-p", "1200", "--title-format", "'Spark Shell'", "/root/spark-1.6.3-bin-hadoop2.6/bin/spark-shell"]
CMD ./gotty -w -p 1200 --title-format 'Spark Shell' /root/spark-1.6.3-bin-hadoop2.6/bin/spark-shell
