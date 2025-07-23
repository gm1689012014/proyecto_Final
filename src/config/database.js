const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'product_api',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
    retry: {
      match: [/ECONNREFUSED/],
      max: 3
    }
  }
);

// Prueba de conexión mejorada
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a DB establecida');
    
    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync({ alter: true });
      console.log('🔄 Modelos sincronizados');
    }
  } catch (error) {
    console.error('❌ Error de conexión:');
    console.error('Revisa que:');
    console.error('1. MySQL esté instalado y corriendo');
    console.error('2. Las credenciales en .env son correctas');
    console.error('3. La base de datos existe');
    console.error('Detalle:', error.message);
  }
})();

module.exports = sequelize;