import { gql } from "@apollo/client/core";
import client from "../ApolloClient/Index";

const getStocks = async () => {
  const data = await client.query({
    query: gql`
      query {
        stocks {
          lastPrice
          tickerSymbol
          predictedPrice
          company
        }
      }
    `,
  });
  return data;
};

export default { getStocks };
