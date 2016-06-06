export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        Tag.belongsToMany(models.article, { through: 'articleTag' });
      },
    },
  });
  return Tag;
};
