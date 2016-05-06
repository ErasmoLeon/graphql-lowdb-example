import {
  GraphQLBoolean
} from 'graphql';

import db from './../../../db';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    db('comment').remove({id: params.id});
    return true;
  }
};