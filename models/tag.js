export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        const manyToManyConfig = {
          through: 'article_tag',
          foreignKey: 'tag_id',
          otherKey: 'article_id',
        };
        Tag.belongsToMany(models.article, manyToManyConfig);
      },
    },
  });
  return Tag;
};
