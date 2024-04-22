# Dockerizing PHP Laravel

## Setup Schema for Laravel Application

![alt text](image.png)

## Adding a Ngnix (Web Server) Container

### Web Server nginx

- Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache.
- `nginx:stable-alpine` is the image we are using for the Nginx container.

Expose port 80 to the host machine

`ports:`
    `- '8000:80'`

Mount the Nginx configuration file

- `/etc/nginx/nginx.conf` is the default configuration file for Nginx.

`volumes:`
    `- ./nginx/nginx.conf:/etc/nginx/nginx.conf`

```yaml
version: '3.8'
    services:
        server:
            image: 'nginx:stable-alpine'
            ports:
                - '8000:80'
            volumes:
                - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
```

1) Create a new directory called `nginx` in the root directory of the project.
2) Create a new file called `nginx.conf` in the `nginx` directory.

```conf
server {
    listen 80;
    index index.php index.html; // handle requests for index.php and index.html
    server_name localhost;      // server name
    root /var/www/html/public;  // root directory
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:3000; // sending PHP requests to the PHP container on port 3000 (php name container)
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```

## Added PHP Container

1) Created a new file `php.dockerfile`

   - `WORKDIR /var/www/html` to set the working directory to `/var/www/html`.
   - `RUN docker-php-ext-install pdo_mysql` to install the pdo_mysql extension.

   ```dockerfile
   FROM php:7.4-fpm-alpine

   WORKDIR /var/www/html

   RUN docker-php-ext-install pro pdo_mysql
    ```

2) Update the `docker-compose.yml` file to include the PHP container.

- `context: ./dockerfiles` to specify the directory where the Dockerfile is located.
- `dockerfile: php.dockerfile` to specify the name of the Dockerfile.
- `volumes: - ./src:/var/www/html:delegated` to mount the source code to the `/var/www/html` directory in the container.
  - `delegated` to improve the performance of the mounted volume.
- `ports: - '3000:9000'` define port 3000 in nginx.conf
      - **host machine** port 3000 is mapped to port 9000 in the container.

    ```yaml
    php:
        build:
        context: ./dockerfiles
        dockerfile: php.dockerfile
        volumes:
        - ./src:/var/www/html:delegated
        ports:
            - '3000:9000'
    ```

## Adding MySQL Container

![alt text](image-1.png)

1. create a new directory called `env` in the root directory of the project.
2. Create a new file called `mysql.env` in the `env` directory.

```env
MYSQL_DATABASE=homestead // database name for the Laravel application
MYSQL_USER=homestead    // username for the MySQL database
MYSQL_PASSWORD=secret   // password for the MySQL database
```

- `env_file`  to specify the path to the environment file.

```yaml
mysql:
    image: mysql:5.7
    env_file:
        - ./env/mysql.env
```

## Adding a composer Utility Container

1) Create a new file called `composer.dockerfile` in the `dockerfiles` directory.

   - `ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]`
         - `composer` to specify the command to run when the container starts.
         - `--ignore-platform-reqs` to ignore platform requirements.
   - `WORKDIR /var/www/html` to set the working directory to `/var/www/html`.

   ```dockerfile
   FROM composer:latest

   WORKDIR /var/www/html

   ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
   ```

2) Update the `docker-compose.yml` file to include the composer container.

- `context: ./dockerfiles` to specify the directory where the Dockerfile is located.
- `dockerfile: composer.dockerfile` to specify the name of the Dockerfile.
- `volumes: - ./src:/var/www/html` to mount the source code to the `/var/www/html` directory in the container.

    ```yaml
    composer:
        build:
            context: ./dockerfiles
            dockerfile: composer.dockerfile
        volumes:
            - ./src:/var/www/html
    ```

## Install Laravel Application

![alt text](image-2.png)

1. run single container **compose** to create a new Laravel project in the `src` directory.

    ```bash
    docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
    ```

2. setup DB_CONNECTION in the `.env` file.

    ```env
    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret
    ```

3. added volumes for server container
        - `./src:/var/www/html` to mount the source code to the `/var/www/html` directory in the container.

   ```yaml
    server:
        volumes:
         - ./src:/var/www/html
    ```

4. start the containers.

    ```bash
    docker-compose up --help
    docker-compose up -d server php mysql
    ```
