// esto es para el test, no vayas a tocar esto javi
function validarProducto(producto) {
  // Comprueba que el objeto producto exista y tenga las propiedades necesarias.
  if (!producto || !producto.nombre || !producto.descripcion || producto.precio === undefined) {
    return false; // Datos inválidos
  }
  
  // Comprueba que el precio sea un número y el nombre no esté vacío.
  if (typeof producto.precio !== 'number' || producto.nombre.trim() === '') {
    return false; // Datos inválidos
  }

  return true; //no toquen esto aqui van todos los datos son válidos
}

module.exports = {
  validarProducto
};