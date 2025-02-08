// Simulación de Base de Datos en Memoria con LocalStorage
let logistica = JSON.parse(localStorage.getItem('logistica')) || [];

// Obtener registros de logística
export function getLogistica() {
  return JSON.parse(localStorage.getItem('logistica')) || [];
}

// Agregar nuevo registro
export function addLogistica(registro) {
  registro.id = logistica.length ? logistica[logistica.length - 1].id + 1 : 1;
  logistica.push(registro);
  saveToLocalStorage();
}

// Actualizar registro
export function updateLogistica(id, updatedData) {
  logistica = getLogistica().map(registro => (registro.id === id ? { ...registro, ...updatedData } : registro));
  saveToLocalStorage();
}

// Eliminar registro
export function deleteLogistica(id) {
  logistica = getLogistica().filter(registro => registro.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('logistica', JSON.stringify(logistica));
}
