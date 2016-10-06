import { createNetworkInterface } from 'apollo-client';

import ApolloClient from 'apollo-client';

const networkInterface = createNetworkInterface('http://localhost:3000/graphql');

export const client = new ApolloClient({
  networkInterface,
  ssrMode: true
});
