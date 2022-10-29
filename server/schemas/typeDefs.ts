import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;
