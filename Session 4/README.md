# Session 4

## Requirements

- docker

## Running locally

If you have make available you can run `make restart-all` which will build the required containers and start them as demons. 

If you don't have make, please run the following:

- `docker compose build`
- `docker compose up -d`

Once you have the containers running you can see the response headers using either the make command `make show-headers` or by running the following curl commands:

- `curl -I http://localhost:9081`
- `curl -k -I https://localhost:9443`
