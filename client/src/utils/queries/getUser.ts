import { gql } from "@apollo/client";

export const QUERY_GET_USER = gql`
  query getUser {
    getUser {
      email
      username
      bio
      image
    }
  }
`;
