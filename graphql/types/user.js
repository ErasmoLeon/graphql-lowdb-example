import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import userProjectType from './user-project';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      type: GraphQLString,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    avatar: {
      type: GraphQLString,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: GraphQLString,
    },
    projects: {
      type: new GraphQLList(userProjectType),
      resolve: user => {
        const projects = user.projects.map(project => {
          const projectOutput = project.dataValues;
          projectOutput.role = projectOutput.user_project.dataValues.role;
          delete projectOutput.user_project;
          return projectOutput;
        });
        return projects;
      },
    },
  },
});
