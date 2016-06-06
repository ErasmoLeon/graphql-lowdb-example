import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import articleInputType from '../../types/article-input';

import { store } from './../../../services/article.service';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(articleInputType)
    }
  },
  async resolve(root, params) {
    return store(params.data);
  }
};
