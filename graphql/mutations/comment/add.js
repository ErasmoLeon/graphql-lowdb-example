import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import commentInputType from '../../types/comment-input';

import db from './../../../db';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(commentInputType)
    }
  },
  async resolve (root, params, options) {
    db('comment').push(params.data);
    return true;
  }
};