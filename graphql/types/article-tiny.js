import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ArticleTiny',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: article => article.body.substring(0, 250),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date_published: {
      type: GraphQLString,
    },
  },
});
