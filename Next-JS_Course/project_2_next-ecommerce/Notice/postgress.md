# postgres

## Setup PostgreSQL with Docker

### Step 1: Create a Docker Compose File

### Step 2: Create container with PostgreSQL

```bash
docker-compose up -d // -d flag runs the container in detached mode
docker ps // to check if the container is running
docker exec -it <container_id> bash // to access the container's bash
```

### Step 3: Access PostgreSQL

```bash
psql -U admin // default user is 'postgres'

psql -h localhost -p 5432 -U admin -d ecommerce // to connect to the 'ecommerce' database
```

### Step 4: Useful PostgreSQL Commands

```sql
\l // list all databases
```

### Step 5: Stopping and Removing Containers

```bash
docker stop <container_id>
docker rm <container_id>
docker-compose down // stops and removes all containers defined in the docker-compose file
```
