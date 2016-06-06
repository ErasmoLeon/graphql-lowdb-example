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
    classMethods: {
      associate: models => {
        Article.belongsTo(models.user);
        Article.belongsToMany(models.tag, { through: 'articleTag' });
      },
    },
  });
  return Article;
};