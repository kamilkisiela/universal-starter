import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const Schema = `
  type Author {
    firstName: String!
    lastName: String!
  }
  
  type Query {
    author: Author
  }
  schema {
    query: Query
  }
`;

const Resolvers = {
  Query: {
    author() {
      return {
        firstName: 'Kamil',
        lastName: 'Kisiela'
      };
    }
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

export function GraphQL() {
  return graphqlExpress({
    schema: executableSchema
  });
}

export function GraphiQL() {
  return graphiqlExpress({
    endpointURL: '/graphql'
  });
}
