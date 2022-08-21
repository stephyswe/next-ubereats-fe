import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

import {
  HEROKU_GRAPHQL,
  LOCAL_GRAPHQL,
  LOCALSTORAGE_TOKEN,
} from '@/constant/env';

export let token: any, isLoggedInVar: any, authTokenVar: any;
const windowCheck = typeof window !== 'undefined';

// Perform localStorage action
if (windowCheck && LOCALSTORAGE_TOKEN) {
  token = localStorage.getItem(LOCALSTORAGE_TOKEN);
  isLoggedInVar = makeVar(Boolean(token));
  authTokenVar = makeVar(token);
}

const wsLink = windowCheck
  ? new GraphQLWsLink(
      createClient({
        url:
          process.env.NODE_ENV === 'production'
            ? `wss://${HEROKU_GRAPHQL}`
            : `ws://${LOCAL_GRAPHQL}`,
        connectionParams: {
          ['x-jwt']: token,
        },
      })
    )
  : null;

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? `https://${HEROKU_GRAPHQL}`
      : `http://${LOCAL_GRAPHQL}`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-jwt': authTokenVar() || '',
    },
  };
});

const splitLink =
  windowCheck && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        authLink.concat(httpLink)
      )
    : httpLink;

const client = new ApolloClient({
  link: splitLink,
  uri: process.env.GRAPHQL_SERVER,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
