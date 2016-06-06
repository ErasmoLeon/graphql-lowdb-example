import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import channelInputType from './../../types/channel-input';

import { store } from './../../../services/channel.service';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(channelInputType)
    }
  },
  async resolve(root, params) {
    return store(params.data);
  }
};