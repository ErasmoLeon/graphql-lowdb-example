import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import projectType from './../../types/project';

import { findById } from './../../../services/project.service';

export default {
  type: projectType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    const withChannels = true;
    return findById(params.id, withChannels);
  },
};
