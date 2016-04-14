import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    postId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    text: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});