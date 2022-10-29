import { ApolloServer, ExpressContext } from "apollo-server-express";
import express, { Express, NextFunction, Request, Response } from "express";
import resolvers from "./schemas/resolvers";
import typeDefs from "./schemas/typeDefs";
import db from "./config/connection";
/**
 * Express Stuff
 */
const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Back at 12:30!");
});
/**
 * Apollo GraphQL Stuff
 */
const apolloServer: ApolloServer<ExpressContext> = new ApolloServer({
  typeDefs,
  resolvers,
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
