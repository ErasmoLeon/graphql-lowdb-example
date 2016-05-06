import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/comment';

import db from './../../../db';

export default {
  type: commentType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    db('comment').remove({id: params.id});
    return true;
  }
};