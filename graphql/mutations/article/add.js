import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import articleInputType from '../../types/article-input';

import db from './../../../db';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(articleInputType)
    }
  },
  async resolve(root, params) {
    db('article').push(params.data);
    return true;
  }
};