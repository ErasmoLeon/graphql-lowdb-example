import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import projectInputType from '../../types/project-input';

import { store } from './../../../services/project.service';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(projectInputType)
    }
  },
  async resolve(root, params) {
    return store(params.data);
  }
};