# Docker Images & Containers: The Core Building Blocks

[Docker Images & Containers](#docker-images--containers-the-core-building-blocks)
    [Docker Images VS Containers](#docker-images-vs-containers)

## Docker Images VS Containers

![alt text](image.png)

- **Docker Image**: a snapshot of a container
- **Docker Container**: a running instance of a Docker image

## Run a Docker Images

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
