import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import channelType from '../../types/channel';

import { findById } from './../../../services/channel.service';

export default {
  type: channelType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return findById(params.id, true);
  },
};
