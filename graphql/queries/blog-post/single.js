import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import blogPostType from '../../types/blog-post';

import db from './../../../db';

export default {
  type: blogPostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return db('blogpost').find({id: params.id});
  }
};