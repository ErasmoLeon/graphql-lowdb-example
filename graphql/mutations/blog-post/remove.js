import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import blogPostType from '../../types/blog-post';

import db from './../../../db';

export default {
  type: blogPostType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    db('blogpost').remove({id: params.id});
    return true;
  }
};