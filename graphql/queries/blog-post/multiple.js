import {
  GraphQLList
} from 'graphql';

import blogPostType from '../../types/blog-post';

import db from './../../../db';

export default {
  type: new GraphQLList(blogPostType),
  args: {},
  resolve (root, params, options) {
    return db('blogpost').value();
  }
};