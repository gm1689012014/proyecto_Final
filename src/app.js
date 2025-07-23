require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');

// Crear aplicación Express
const app = express();

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Ruta principal que sirve test.html
//app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public', 'test.html'));
//});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/test.html'));
});
// Ruta de información de la API
app.get('/api', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de Productos',
    endpoints: {
      getProducts: 'GET /api/products',
      getProduct: 'GET /api/products/:id',
      createProduct: 'POST /api/products',
      updateProduct: 'PUT /api/products/:id',
      deleteProduct: 'DELETE /api/products/:id'
    }
  });
});

// Rutas de productos
app.use('/api/products', productRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;