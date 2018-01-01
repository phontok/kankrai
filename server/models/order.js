module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    external_id: DataTypes.INTEGER,
    currency: {
      type: DataTypes.STRING,
    },
    earnings: {
      type: DataTypes.DECIMAL,
    },
    fee: {
      type: DataTypes.DECIMAL,
    },
    sale_gross: {
      type: DataTypes.DECIMAL,
    },
    tax: {
      type: DataTypes.DECIMAL,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    payload: {
      type: DataTypes.JSONB,
    },
  });
  return Order;
};
