export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      },
    },
  });
  return Channel;
};
