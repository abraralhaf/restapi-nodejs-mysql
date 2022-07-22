'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('barang',{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    part_number: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    alias: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.JSON
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false,
    }
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('barang');
  }
};
