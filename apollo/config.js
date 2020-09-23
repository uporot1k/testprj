import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

import schema from './schema';

export default function (ctx) {
  return {
    httpEndpoint: null,
    wsEndpoint: null,
    connectToDevTools: true,
    cache,
    schema
  }
}
