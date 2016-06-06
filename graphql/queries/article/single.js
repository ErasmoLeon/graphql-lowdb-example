import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import articleType from '../../types/article';

import { findById } from './../../../services/article.service';

export default {
  type: articleType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return findById(params.id);
  },
};
