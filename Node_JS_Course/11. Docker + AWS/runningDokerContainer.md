# Instruction to run a docker container

## Run docker container

- `-p` flag is used to publish a container's port to the host
- `80:80` port 80 on the container maps to port 80 on my machine
- `docker/getting-started` is the name of the image

```bash
docker run -p 80:80 docker/getting-started
docker login
```

```browser
http://localhost:80
```

## Creating a Docker image from a Dockerfile

- allows to take a base image like our getting-started image
