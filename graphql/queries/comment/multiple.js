import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/comment';

import db from './../../../db';

export default {
  type: new GraphQLList(commentType),
  args: {
    postId: {
      name: 'postId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return db('comment').value();
  }
};