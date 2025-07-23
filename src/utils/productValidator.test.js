const { validarProducto } = require('./productValidator');

// Describe el conjunto de pruebas para la función validarProducto
describe('Pruebas para productValidator', () => {

  // Prueba 1: El caso exitoso
  test('debería devolver true para un producto con todos los datos válidos', () => {
    const productoValido = {
      nombre: 'Laptop Pro',
      descripcion: 'Una laptop potente',
      precio: 1500
    };
    // Esperamos que el resultado de la validación sea 'true'
    expect(validarProducto(productoValido)).toBe(true);
  });

  // Prueba 2: Un caso de falla (falta un campo)
  test('debería devolver false si falta el nombre del producto', () => {
    const productoInvalido = {
      // Falta el nombre
      descripcion: 'Una laptop sin nombre',
      precio: 1200
    };
    // Esperamos que el resultado sea 'false'
    expect(validarProducto(productoInvalido)).toBe(false);
  });

  // Prueba 3: Otro caso de falla (tipo de dato incorrecto)
  test('debería devolver false si el precio no es un número', () => {
    const productoInvalido = {
      nombre: 'Producto con error',
      descripcion: 'El precio es un string',
      precio: 'mil' // Precio inválido
    };
    // Esperamos que el resultado sea 'false'
    expect(validarProducto(productoInvalido)).toBe(false);
  });
});