import { gql } from "apollo-server-express";

const typeDefs = gql`
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
  }
`;

export default typeDefs;
