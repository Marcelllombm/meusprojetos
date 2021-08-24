'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('guia_resposta', { 
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
       },
      corpo:{
        allowNull:false,
        type: Sequelize.TEXT
      },
      pergunta_id: {
        allonwNull:false,
        type:Sequelize.INTEGER
      },
      created_at: {
        allowNull:false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type:Sequelize.DATE
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('guia_resposta');
  }
};
