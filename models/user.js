export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        const manyToManyConfig = {
          through: 'user_project',
          foreignKey: 'user_id',
          otherKey: 'project_id',
        };
        User.hasMany(models.article);
        User.belongsToMany(models.project, manyToManyConfig);
      },
    },
  });
  return User;
};
