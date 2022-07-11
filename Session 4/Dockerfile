FROM nginx:1.20

RUN apt-get update && \
    apt-get install -yqq nginx-extras && \
    rm -rf /var/lib/apt/lists/*

RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Company, Inc./CN=localhost" \
    -addext "subjectAltName=DNS:localhost" \
    -newkey rsa:2048 -keyout \
    /etc/nginx/conf.d/ssl.key -out /etc/nginx/conf.d/ssl.crt;

COPY config/base.conf /etc/nginx/conf.d/default.conf
