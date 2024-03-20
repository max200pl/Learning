const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

const resolversArray =
    loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer(typeDefs, resolvers) {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: [typesArray],
        resolvers: resolversArray,
    })

    const server = new ApolloServer({
        schema,
    });

    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(3000, () => {
        console.log("Running GrapchQL server on port 3000...")
    })
}

startApolloServer()


