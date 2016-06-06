export default (sequelize, DataTypes) => {
  const ArticleTag = sequelize.define('article_tag', {
    role: DataTypes.STRING,
  }, {
    underscored: true,
  });
  return ArticleTag;
};
