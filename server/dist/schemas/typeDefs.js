"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Book {
    _id: ID
    title: String
    author: String
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    gravitron: String
  }

  type Query {
    books: [Book]
    profiles: [Profile]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
  }
`;
exports.default = typeDefs;
