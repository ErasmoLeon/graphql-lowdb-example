import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import channelType from '../../types/channel';

import db from './../../../db';

export default {
  type: channelType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return db('channel').find({
      id: params.id,
    });
  },
};
