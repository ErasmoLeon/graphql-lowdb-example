import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import userType from './../../types/user';

import { findById } from './../../../services/user.service';

export default {
  type: userType,
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
