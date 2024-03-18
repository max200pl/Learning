# Implementation

[Documentation](https://spec.graphql.org/draft/)

## JavaScript reference implementation

- Frontend Libraries
  - [Apollo Client](https://www.apollographql.com/docs/react/)
  - [Relay](https://relay.dev/)

### Init project

```bash
npm init -y
npm install graphql@15.3.0
npm install express
npm install express-graphql # middleware for express
```

### Create a server

```javascript

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
    description: "Red Shirt",
    price: 29.99
}

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
}));
```

### Postman for testing

![alt text](image-12.png)
