import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import blogPostInputType from '../../types/blog-post-input';

import db from './../../../db';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(blogPostInputType)
    }
  },
  async resolve (root, params, options) {
    db('blogpost').push(params.data);
    return true;
  }
};