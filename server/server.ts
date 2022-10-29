import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import express, { Express, Request } from "express";
import db from "./config/connection";
import resolvers from "./schemas/resolvers";
import typeDefs from "./schemas/typeDefs";
import authMiddleware from "./utils/authMiddleware";
dotenv.config({});
/**
 * Express Stuff
 */
const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;
/**
 * Apollo GraphQL Stuff
 */
const apolloServer: ApolloServer<Request> = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

(async function startApolloServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once("open", function () {
    console.log(`🍕 MongoDB Database Started!`);
    app.listen(PORT, () => {
      console.log(`🌐 Express Started at http://localhost:8080`);
      console.log(`⚾ GraphQL Started at http://localhost:8080/graphql`);
    });
  });
})();
