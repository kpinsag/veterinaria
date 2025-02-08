// Simulación de Base de Datos en Memoria con LocalStorage
let stock = JSON.parse(localStorage.getItem('stock')) || [];

// Obtener productos de stock
export function getStock() {
  return JSON.parse(localStorage.getItem('stock')) || [];
}

// Agregar nuevo producto al stock
export function addStock(product) {
  product.id = stock.length ? stock[stock.length - 1].id + 1 : 1;
  stock.push(product);
  saveToLocalStorage();
}

// Actualizar producto en stock
export function updateStock(id, updatedData) {
  stock = getStock().map(product => (product.id === id ? { ...product, ...updatedData } : product));
  saveToLocalStorage();
}

// Eliminar producto del stock
export function deleteStock(id) {
  stock = getStock().filter(product => product.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('stock', JSON.stringify(stock));
}
