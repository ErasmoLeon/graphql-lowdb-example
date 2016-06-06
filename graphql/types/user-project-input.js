import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserProjectInput',
  fields: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    project_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
