import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import userProjectInput from '../../types/user-project-input';

import { addProject } from './../../../services/user.service';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userProjectInput)
    }
  },
  async resolve(root, params) {
    return addProject(params.data);
  }
};