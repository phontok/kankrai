module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      external_id: {
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
      },
      earnings: {
        type: Sequelize.DECIMAL,
      },
      fee: {
        type: Sequelize.DECIMAL,
      },
      sale_gross: {
        type: Sequelize.DECIMAL,
      },
      tax: {
        type: Sequelize.DECIMAL,
      },
      product_id: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      payload: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('Orders'),
};
