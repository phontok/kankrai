module.exports = (Sequelize/* , DataTypes */) => {
  const Order = Sequelize.define('Order', {
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
  });
  return Order;
};
