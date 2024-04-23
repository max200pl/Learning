# main information

[main information](#main-information)
   [What is Docker? and Why we need it?](#what-is-docker-and-why-we-need-it)
       [Why we need Docker?](#why-we-need-docker)
    [Virtual Machine VS Docker container](#virtual-machine-vs-docker-container)
    [Docker Setup](#docker-setup)
       [Docker Installation](#docker-installation)
    [Docker container](#docker-container)
       [Container VS Images](#container-vs-images)
       [Docker hub](#docker-hub)

![main diagram](./Img/docker/image-1.png)

## What is Docker? and Why we need it?

![alt text](./Img/docker/image-15.png)

### Why we need Docker?

![alt text](./Img/docker/image-19.png)

- **Different Development & Production Environments**
  - exact same environment for Development and Production
    ![alt text](./Img/docker/image-16.png)
  - easy to share the environment with the team
    ![alt text](./Img/docker/image-17.png)
  - easy switch between different projects
    ![alt text](./Img/docker/image-18.png)

## Virtual Machine VS Docker container

![alt text](./Img/docker/image-23.png)

1. Virtual Machine:
![alt text](./Img/docker/image-20.png)
   - has own operation system (OS) and hardware (CPU, RAM, Storage)
   - can install libraries, frameworks, and applications
   - insulated and isolated from other VMs
   - a standalone machine -> big size -> slow to start -> high cost -> less efficient:
    ![alt text](./Img/docker/image-21.png)

2. Container:
![alt text](./Img/docker/image-22.png)
    - run a Docker engine (emulated Container support) on the host machine
    - no need run tone extra tools
    - can run multiple containers on the same host machine
    - lightweight -> fast to start -> low cost -> more efficient:
    - can configured containers and build images

## Docker Setup

![docker tools](./Img/docker/Docker Setup 1.png)

![Docker Setup](./Img/docker/Docker Setup.png)

### Docker container

<https://www.docker.com/get-started/>

![alt text](./Img/docker/image-5.png)

- build a Docker container
Docker container is a small boxes run anywhere on our desktop.
![alt text](./Img/docker/image-8.png)
![alt text](./Img/docker/image-9.png)

    **containers still completely isolated from each other and the host system**

Virtual Machine vs Docker container:

- Docker container is more lightweight than Virtual Machine
- Docker container is more portable than Virtual Machine
- Docker container is more efficient than Virtual Machine

- Virtual Machine is more secure than Docker container
- Virtual Machine is more stable than Docker container

Containers and Virtual Machines Using together in EC2 Container Service
![alt text](./Img/docker/image-10.png)

#### Container VS Images

- container contain your running application
- images collection all the files and dependencies needed to run a container

#### Docker hub

<https://www.docker.com/products/docker-hub/>

- docker hub is a repository of docker images
![alt text](./Img/docker/image-11.png)
