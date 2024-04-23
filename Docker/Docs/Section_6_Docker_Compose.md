# Docker compose

[Docker compose](#docker-compose)
    [Introduction](#introduction)

## Introduction

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

## Creating a docker-compose file

1. Not create network for the services
    - docker-compose automatically creates a network for the services
    - but you can create a network manually

![version docker compose](image-3.png)

- `version` : version of the docker-compose file
- `services` : list of services that we want to run
- `image` : image that we want to run (mongo, redis, etc ...)
- `volumes` : volumes that we want to mount to the container
- `env_file` : file that contains the environment variables

```yaml
version: "3.8"
services:
    mongodb:
        image: 'mongo'
        volumes:
            - data:/data/db
        # environment:
        #     # - MONGO_INITDB_ROOT_USERNAME=root
        #     MONGO_INITDB_ROOT_USERNAME: root
        #     MONGO_INITDB_ROOT_PASSWORD: example

        env_file:
            - ./env/mongo.env

    backend:
    frontend:
volumes:
    data:
```

```env
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
```

## Running the docker-compose file

- `docker-compose up` : run the services (attach mode)
- `docker-compose up -d` : run the services (detach mode)
- `docker-compose down` : stop the services (delete the containers, but not the images)

```bash
docker image prune
docker-compose up -d
docker-compose down
```

## Woking with multiple containers

```yaml
backend:
    # build: // longer way to build the image
    #     context: ./backend
    #     dockerfile: Dockerfile
    #    args:
    #        - NODE_ENV=production
    build: ./backend
    ports:
        - '80:80'
    volumes:
        - logs:/app/logs
        - ./backend:/app
        - /app/node_modules
    env_file:
        - ./env/backend.env
    depends_on:
        - mongodb

frontend:
    build: ./frontend
    ports:
        - '3000:3000'
    volumes:
        - ./frontend/src:/app/src #bind mount
    stdin_open: true #-iterative mode -> docker run -i
    tty: true # -terminal -> docker run -t
    depends_on:
        - backend
```

## Docker compose commands

- `docker-compose up -d` : run the services (detach mode)
- `docker-compose down` : stop the services (delete the containers, but not the images)
- `docker-compose ps` : list the services
- `docker-compose logs` : show the logs of the services
- `docker-compose build` : build the images without running the services
