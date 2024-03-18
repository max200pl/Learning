const express = require('express');
const { buildSchema } = require('graphql'); // allows us to build a schema from a string
const { graphqlHTTP } = require('express-graphql'); // express middleware for graphql

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subTotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
    products: [
        {
            id: "redshoes",
            description: "Red shoes",
            price: 123.44,
        },
        {
            id: "blueshoes",
            description: "Blue shoes",
            price: 44.2,
        },
    ],
    orders: [
        {
            date: "2021-12-12",
            subTotal: 123.44,
            items: [
                {
                    product: {
                        id: "redshoes",
                        description: "Old red shoes",
                        price: 42.11,
                    },
                    quantity: 2
                }
            ]
        }
    ]
}

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Running GrapchQL server on port 3000...")
})