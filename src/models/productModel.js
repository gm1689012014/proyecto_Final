const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'products',
  timestamps: true
});

// Sincronizar el modelo con la base de datos
(async () => {
  try {
    await Product.sync({ alter: true }); // Usa { force: true } solo en desarrollo para recrear tablas
    console.log('Modelo de Producto sincronizado con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo:', error);
  }
})();

module.exports = Product;