import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import tagInputType from './tag-input';

export default new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tags: {
      type: new GraphQLList(tagInputType),
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
