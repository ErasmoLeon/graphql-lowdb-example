import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import channelType from './channel';

export default new GraphQLObjectType({
  name: 'Project',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    logo: {
      type: new GraphQLNonNull(GraphQLString),
    },
    channels: {
      type: new GraphQLList(channelType),
      resolve: project => project.channels.map(channel => channel.dataValues),
    },
    status: {
      type: GraphQLString,
    },
  },
});
