const express = require("express");
const { ApollosServer, ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require("./schema");
const sequelize = require("./config/connection");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});
