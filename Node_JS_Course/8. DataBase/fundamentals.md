# Fundamentals

- node best practice <https://github.com/goldbergyoni/nodebestpractices>

Type DataBase:

1. Relational -> SQL, MySQL, and PostgresSQL
2. Document -> MongoDB
3. KeyValue -> Redis
4. Graph model -> Social Network
5. Wide-column -> NoSQL database

============= MongoDB vs Postgres ================

|  DB             | MongoDB     | Postgres      |
| :---            |    :----    |       ---:    |
| type:           | Document    |  Relational   |
| Organized into: | Collections |  Tables       |
| Query language: | NoSQL       |  SQL          |
| Scaling factor: | Horizontal  |  Vertical     |
| Schema:         | Flexible    |  Rigid        |

============= MongoDB vs Postgres ================

## Scaling DB

![Scaling](Scaling.png)

## ACID - transactions

- fully read data
- data not lost
- only one option or read or no
- ___
- ___

## ============= MongoDB =============

## Mongoose

1. Elegant mongoDb object modeling node.js
![Mongoose model](image.png)

- Schema validation: String | Number | ...

## Data structure in mongoDbo

![Alt text](image.png)

- ObjectId -> uniq id
- __v -> version key :
  1. If need updated Schema
  2. manage document with old data -> in sequel db need use database migration

## Referential integrity in a Sequel

![Alt text](image-1.png)

1. If foreign key was broken
