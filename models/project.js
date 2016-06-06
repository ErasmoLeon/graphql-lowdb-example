export default (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        const manyToManyConfig = {
          through: 'user_project',
          foreignKey: 'project_id',
          otherKey: 'user_id',
        };
        Project.belongsToMany(models.user, manyToManyConfig);
        Project.hasMany(models.channel);
      },
    },
  });
  return Project;
};
