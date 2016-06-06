export default (sequelize, DataTypes) => {
  const ArticleTag = sequelize.define('article_tag', {
    role: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        // associations can be defined here
      },
    },
  });
  return ArticleTag;
};
