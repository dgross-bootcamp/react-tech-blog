"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Book {
    _id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
exports.default = typeDefs;
