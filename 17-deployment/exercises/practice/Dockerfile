FROM kstaken/apache2
LABEL name "my-docker-deployment"
RUN apt-get update && apt-get install -y php5 libapache2-mod-php5 php5-mysql php5-cli && apt-get clean && rm -rf /var/lib/apt/lists/*
COPY index.html /var/www
EXPOSE 80
CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]