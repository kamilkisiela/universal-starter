import 'isomorphic-fetch';

import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: '/graphql'
});

export const client = new ApolloClient({
  networkInterface
});
