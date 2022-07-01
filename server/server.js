const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 3001;
const { authMiddleware } = require("./utils/auth");
const path = require("path");

const { typeDefs, resolvers } = require("./schema");
const sequelize = require("./config/connection");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req }) => ({ req }),
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

startServer();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});
