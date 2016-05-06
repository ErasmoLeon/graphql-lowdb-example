import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import commentType from '../../types/comment';

import db from './../../../db';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return db('comment').find({id: params.id});
  }
};