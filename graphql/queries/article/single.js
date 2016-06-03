import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import articleType from '../../types/article';

import db from './../../../db';

export default {
  type: articleType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return db('article').find({
      id: params.id,
    });
  },
};
