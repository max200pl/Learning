# Deploying

[Deploying](#deploying)
    - [Introduction](#introduction)
    - [From development to production](#from-development-to-production)
    - [Bind mounts in production](#bind-mounts-in-production)

## Introduction

## From development to production

![alt text](./Img/Section_9_Deploying/image.png)
![alt text](./Img/Section_9_Deploying/image-1.png)
![biggest host providers](./Img/Section_9_Deploying/image-2.png)

1) shouldn't be use bind mounts in production

## Bind mounts in production

![alt text](./Img/Section_9_Deploying/image-3.png)

## Pushing our local image to the cloud

![deploy source or deploy built image](./Img/Section_9_Deploying/image-4.png)

1) build the image locally
2) push the image to the cloud
3) deploy source or deploy built image
4) pull the image from the cloud
5) run the image

```bash
docker login
docker build -t node_example_1 .
docker tag node_example_1:latest maksymposkannyi/node_example_1:tagname
docker images
docker push maksymposkannyi/node_example_1:tagname
```

```bash Putty
docker run -d --rm -p 80:80 maksymposkannyi/node_example_1:tagname
docker ps
```

## Allow the container to access the internet

![alt text](./Img/Section_9_Deploying/image-5.png)

![alt text](./Img/Section_9_Deploying/image-6.png)

![alt text](./Img/Section_9_Deploying/image-7.png)
