# Main commands for MongoDB shell

## Connect to a MongoDB instance

```shell
mongo --host <host> --port <port> -u <username> -p <password> --authenticationDatabase <auth-db>
```

## Show all databases

```shell
show dbs
```

## Use a database

```shell
use <database>
```

## Show all collections in the current database

```shell
show collections
```

## Rename a collection

```shell
db.<collection>.renameCollection("<new-collection>")
```
