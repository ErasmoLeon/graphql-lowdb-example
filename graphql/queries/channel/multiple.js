import {
  GraphQLList,
} from 'graphql';

import channelType from '../../types/channel';

import db from './../../../db';

export default {
  type: new GraphQLList(channelType),
  args: {},
  resolve(root, params) {
    return db('channel').value();
  },
};
