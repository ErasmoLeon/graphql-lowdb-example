import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
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
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    channel_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    date_published: {
      type: GraphQLString,
    },
  },
});
