import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Tag',
  fields: {
    name: {
      type: GraphQLString,
    },
  },
});
