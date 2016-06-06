export default (sequelize, DataTypes) => {
  const UserProject = sequelize.define('user_project', {
    role: DataTypes.STRING,
  }, {
    underscored: true,
  });
  return UserProject;
};
