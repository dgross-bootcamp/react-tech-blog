import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
