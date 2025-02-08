// Simulación de Base de Datos en Memoria con LocalStorage
let historial = JSON.parse(localStorage.getItem('historial')) || [];

// Obtener registros clínicos
export function getHistorial() {
  return JSON.parse(localStorage.getItem('historial')) || [];
}

// Agregar nuevo registro clínico
export function addHistorial(registro) {
  registro.id = historial.length ? historial[historial.length - 1].id + 1 : 1;
  historial.push(registro);
  saveToLocalStorage();
}

// Actualizar registro clínico
export function updateHistorial(id, updatedData) {
  historial = getHistorial().map(registro => (registro.id === id ? { ...registro, ...updatedData } : registro));
  saveToLocalStorage();
}

// Eliminar registro clínico
export function deleteHistorial(id) {
  historial = getHistorial().filter(registro => registro.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('historial', JSON.stringify(historial));
}
