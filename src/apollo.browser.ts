import { createNetworkInterface } from 'apollo-client';

import ApolloClient from 'apollo-client';

const networkInterface = createNetworkInterface('/graphql');

export const client = new ApolloClient({
  networkInterface
});
