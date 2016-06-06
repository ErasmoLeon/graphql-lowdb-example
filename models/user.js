export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: models => {
        const manyToManyConfig = {
          through: 'user_project',
          foreignKey: 'user_id',
          otherKey: 'project_id',
        };
        User.hasMany(models.article);
        User.belongsToMany(models.project, manyToManyConfig);
      },
    },
  });
  return User;
};

//TODO check this
/**
 * sequelize.define('user', {
  password_hash: DataTypes.STRING,
  password: {
    type: DataTypes.VIRTUAL,
    set: function (val) {
       this.setDataValue('password', val); // Remember to set the data value, otherwise it won't be validated
       this.setDataValue('password_hash', this.salt + val);
     },
     validate: {
        isLongEnough: function (val) {
          if (val.length < 7) {
            throw new Error("Please choose a longer password")
         }
      }
    }
  }
})
 */
