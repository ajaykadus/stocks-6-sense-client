import { gql } from "@apollo/client/core";
import client from "../ApolloClient/Index";

const getUsers = async () => {
  const users = await client.query({
    query: gql`
      query {
        users {
          firstName
          lastName
        }
      }
    `,
  });
  return users;
};

export default {
  getUsers,
};
