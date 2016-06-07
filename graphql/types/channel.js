import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import articleTinyType from './article-tiny';

export default new GraphQLObjectType({
  name: 'Channel',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    articles: {
      type: new GraphQLList(articleTinyType),
      resolve: channel => channel.articles.map(article => article.dataValues),
    },
  },
});

