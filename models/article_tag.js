export default sequelize => {
  const ArticleTag = sequelize.define('article_tag', {}, {
    underscored: true,
  });
  return ArticleTag;
};
