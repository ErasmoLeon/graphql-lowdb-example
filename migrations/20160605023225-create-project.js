'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var query = queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('enable', 'disable'),
        allowNull: false,
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
    var query = queryInterface.dropTable('projects');
    return query;
  }
};