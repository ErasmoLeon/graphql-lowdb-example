import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'BlogPostInput',
  fields: {
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString}
  }
});