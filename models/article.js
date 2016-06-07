export default (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    body: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    published_at: DataTypes.DATE,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        const manyToManyConfig = {
          through: 'article_tag',
          foreignKey: 'article_id',
          otherKey: 'tag_id',
        };
        Article.belongsTo(models.user);
        Article.belongsTo(models.channel);
        Article.belongsToMany(models.tag, manyToManyConfig);
      },
    },
  });
  return Article;
};
