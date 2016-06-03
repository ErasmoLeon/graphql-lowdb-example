import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
//import mongoose from 'mongoose';

var app = express();

app.use(express.static(__dirname));

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true
})));

// Connect mongo database
//mongoose.connect('mongodb://localhost/graphql');

var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
