"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    email: String
    token: String
    username: String
    bio: String
    image: String
  }

  type Profile {
    username: String
    bio: String
    image: String
    following: Boolean
  }

  type Query {
    getUser: User
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    updateUser(
      email: String
      username: String
      password: String
      image: String
      bio: String
    ): User
  }
`;
exports.default = typeDefs;
