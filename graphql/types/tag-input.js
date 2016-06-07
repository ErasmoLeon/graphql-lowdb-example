import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'TagInput',
  fields: {
    name: {
      type: GraphQLString,
    },
  },
});
