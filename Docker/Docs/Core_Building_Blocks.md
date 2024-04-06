# Docker Images & Containers: The Core Building Blocks

[Docker Images & Containers](#docker-images--containers-the-core-building-blocks)
    [Docker Images VS Containers](#docker-images-vs-containers)

## Docker Images VS Containers

![alt text](image.png)

- **Docker Image**: a snapshot of a container
- **Docker Container**: a running instance of a Docker image

## Run a Docker Images

![alt text](image-2.png)

- node image contains the node Installation (environments, libraries, frameworks, and applications)

```bash
docker run node
```

- `docker ps` command to list all running containers
- `docker ps -a` command to list all containers (running and stopped)

```bash
docker ps -a
```

- `-it` flag to run the container in interactive mode

``` bash
docker run -it node // run the node image in interactive mode
```

## Create a Docker Image

- `FROM` keyword to specify the base image
- `FROM node` to use the node image as the base image
- `WORKDIR /app` to set the working directory in the container
- `COPY` keyword to copy the files from the host machine to the container
- `COPY . /app`  to copy all the files from the current directory to the `/app` directory in the container
![alt text](image-3.png)
- `RUN` keyword to run a command in the container
- `RUN npm install` to install the dependencies in the container
- `EXPOSE 80` keyword to expose a port in the container (port 80 in this case only for documentation)
- `CMD` keyword to specify the command to run when the container starts
- `CMD ["node", "server.js"]` to run the `server.js` file when the container starts
**`RUN node server.js ->> CMD ["node", "server.js"] ... Don't run the server in the Dockerfile`**

``` Dockerfile
FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]
```

## Build a Docker Image

- `docker build` command to build a Docker image
- `.` to specify the current directory as the build context
- `run <image-id>` to run the Docker image
- `docker ps` command to list all running containers
- `docker stop <name>` to stop a running container
- `docker run -p` to publish a container's port to the host (with port should be accessible)
![alt text](image-4.png)

```bash
docker build .
docker run <image-id>
docker ps
docker stop <name>
docker run -p 3000:80 <image-id>
docker stop <name>
```

## Image layers

- docker cache data if the image is built before

![alt text](image-5.png)

- `cache` every layer will be and reused if the image is built again
- docker only rebuilds the layers that have changed

``` Dockerfile
FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "server.js"]
```

## Managing Images and Containers

![alt text](image-6.png)

- `docker ps a` command to list all containers (running and stopped)
- `docker ps --help` command to get help on the `docker ps` command
![alt text](image-7.png)
- `docker start <container-name>` command to start a stopped container
**`docker start` running in the background, use `docker run` to run in the foreground**
**`docker run` has detached mode by default `-d` to run in the background**
- `docker run -p 8000:80 -d <image-id>` command to run a container in detached mode and publish a container's port to the host
- `docker attach <container-name>` command to attach to a running container again
- `docker logs <container-name>` command to view the logs of a container
- `docker logs --help` command to get help on the `docker logs` command
- `docker logs -f <container-name>` command to follow the logs of a container
- `docker start -a <container-name>` command to start a container in the foreground

```bash
docker ps --help
docker ps -a
docker start <container-name>
docker run -p 8000:80 -d <image-id>
docker attach <container-name>
docker logs <container-name>
docker logs --help
docker logs -f <container-name>
docker start -a <container-name>
```

## Entering interactive mode

```Dockerfile
FROM python

WORKDIR /app

COPY . /app

CMD ["python", "rng.py"]
```

- `docker run -it <container-id>` command to run a container in interactive mode
- `docker ps -a` command to list all containers (running and stopped)
- `docker start -a <container-name>` start a container with attached mode but only listen mode
- `docker start -a -i <container-name>` start a container with attached mode and input mode

```bash
docker build .
docker run --help
docker run -it <container-id>
docker ps -a

docker start -a  <container-name>
![alt text](image-8.png)
docker start -a -i <container-name>
```
