export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        Channel.belongsTo(models.project);
      },
    },
  });
  return Channel;
};
