import {
  GraphQLList,
} from 'graphql';

import articleType from '../../types/article';

import db from './../../../db';

export default {
  type: new GraphQLList(articleType),
  args: {},
  resolve(root, params) {
    return db('article').value();
  },  
};
