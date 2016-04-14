import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';

var app = express();

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true
})));

var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});