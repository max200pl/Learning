const express = require('express');
const { buildSchema } = require('graphql'); // allows us to build a schema from a string
const { graphqlHTTP } = require('express-graphql'); // express middleware for graphql

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

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
}));

app.listen(3000, () => {
    console.log("Running GrapchQL server on port 3000...")
})