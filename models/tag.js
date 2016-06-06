export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: models => {
        Tag.belongsToMany(models.article, { through: 'articleTag' });
      },
    },
  });
  return Tag;
};
