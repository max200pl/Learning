# Build multi-container applications

[Build multi-container applications](#build-multi-container-applications)
    - [Introduction](#introduction)

## Introduction

![alt text](./Img/Section_5/image.png)

## Setup (Schema of the project)

![alt text](./Img/Section_5/image-1.png)

## Dockerizing a MongoDB Service

- `-p 27017:27017` - Expose the MongoDB port to the host machine

```bash
docker run -name mongodb --rm -d -p 27017:27017 mongo
docker logs mongodb
```

![alt text](./Img/Section_5/image-2.png)

## Dockerizing a Node.js application

```bash
docker build -t goals-node .
docker run --name goals-backend --rm -d -p 80:80 goals-node
```

- `host.docker.internal` - This is a special DNS name which Docker sets up to allow communication between containers and the host machine.

```javascript
mongoose.connect(
    'mongodb://host.docker.internal:27017/course-goals', // <<<<
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.error('FAILED TO CONNECT TO MONGODB');
            console.error(err);
        } else {
            console.log('CONNECTED TO MONGODB');
            app.listen(80);
        }
    }
);
```

## Dockerizing a React application

- `Dockerfile` for the React application

```Dockerfile
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

- `-it` - Interactive mode (needed for the React app to run in the foreground)

```bash
docker build -t goals-react .

docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react
```

### Reflected running container if source code changes

- `-v $(pwd):/app` - Bind mount the current directory to `/app`
- `$(pwd)` C:\_________PERSONAL_________\ReduxCourse\Docker\Projects\7_multi_container_app\frontend\src

**Resolve issue with Reflected container files* /HelperResurses/windows-wsl2-file-events**

```bash
docker run -v $(pwd):/app/src --name goals-frontend --rm -d -p 3000:3000 -it -v $(pwd):/app goals-react
```

## Added Docker Networks

- `docker network create goals-net` - Create a new network
- `--network goals-net` - Connect the container to the network

```bash
docker network ls
docker network create goals-net

docker run --name mongodb --rm -d --network goals-net mongo
```

```javascript
mongoose.connect(
    'mongodb://mongodb:27017/course-goals', // <<<<
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.error('FAILED TO CONNECT TO MONGODB');
            console.error(err);
        } else {
            console.log('CONNECTED TO MONGODB');
            app.listen(80);
        }
    }
);
```

```bash
docker build -t goals-node .
docker run --name goals-backend --rm -d --network goals-net -p 80:80 goals-node
```

```bash
docker build -t goals-react .
docker run --name goals-frontend --rm -d -p 3000:3000 goals-react
```

## Data Persist in MongoDB

![alt text](./Img/Section_5/image-8.png)

Wen whe remove the MongoDB container, the data is lost.

MongoDB data is stored in `/data/db` inside the container.

![alt text](./Img/Section_5/image-3.png)

1. Need created a volume to persist the data
    - `-v data:/data/db` - Create a volume named `data` and mount it to `/data/db`

    ```bash
        docker volume ls
        docker stop mongodb
        docker run --name mongodb --rm -d --network goals-net -v data:/data/db mongo
    ```

2. Security issue
    - `MONGO_INITDB_ROOT_USERNAME` - Set the root username
    - `MONGO_INITDB_ROOT_PASSWORD` - Set the root password

![alt text](./Img/Section_5/image-4.png)

![alt text](./Img/Section_5/image-5.png)

![alt text](./Img/Section_5/image-6.png)

```dockerfile
// backend/Dockerfile
ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=root
```

```javascript
mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/course-goals/?authSource=admin`, // <<<<
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);
```

```bash
docker stop mongodb

docker stop goals-backend

docker build -t goals-node .

docker run --name mongodb --rm -d --network goals-net -v data:/data/db -e MONGODB_USERNAME=admin -e MONGODB_PASSWORD=123 mongo
```

## Bind Mounts & Polishing for the Node.js Container

![alt text](./Img/Section_5/image-7.png)

1. Need one volume for the logs
    - `-v logs:/app/logs`  - Create a volume named `logs` and mount it to `/app/logs`

2. Bind mount for the source code
    - `-v $(pwd):/app` - Bind mount the current directory to `/app`
    - `$(pwd)` - Get the current directory C:\_________PERSONAL_________\ReduxCourse\Docker\Projects\7_multi_container_app\backend

3. Node_modules - `node_modules` not bind mounted
    - `-v /app/node_modules` - Create a volume for `node_modules` and mount it to `/app/node_modules`

4. Restart node server when the source code changes
    - `nodemon` - A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```json
"scripts": {
   "start": "nodemon app.js"
}
"devDependencies": {
    "nodemon": "^2.0.4"
}
```

```bash
docker stop goals-backend

docker build -t goals-node .

docker logs goals-backend

docker run --name goals-backend --rm -d --network goals-net -p 80:80 -v logs:/app/logs -v $(pwd):/app
 -v /app/node_modules goals-node
```

## Ignore files

```.dockerignore
// backend/.dockerignore
node_modules
Dockerfile
.git

// frontend/.dockerignore
node_modules
Dockerfile
.git
```

**[⬆ back to top](#introduction)**
