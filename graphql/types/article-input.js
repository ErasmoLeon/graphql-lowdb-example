import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    channel_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    author_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    status: {
      type: GraphQLString,
    },
    date_published: {
      type: GraphQLString,
    },
    date_created: {
      type: GraphQLString,
    },
    date_updated: {
      type: GraphQLString,
    },
  },
});
