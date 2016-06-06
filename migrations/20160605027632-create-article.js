'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var query = queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('enable', 'disable'),
        allowNull: false,
      },
      published_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      channel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'channels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    return query;
  },
  down: function down(queryInterface) {
    var query = queryInterface.dropTable('articles');
    return query;
  }
};