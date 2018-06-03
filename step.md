step 1: yarn add mongoose graphql-yoga graphql-compose graphql-compose-mongoose dotenv
step 2: yarn add babel-cli babel-preset-env --dev
step 3: add scripts to package.json
step 4: code in app.js.

EX: 
```javascript
import { GraphQLServer } from 'graphql-yoga';

import schema from "./schema/schema";
import './mongooseConnection';

const host = process.env.HOST || 8000;

const server = new GraphQLServer({ schema });

const options = {
  port: host,
  endpoint: '/api/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);
```