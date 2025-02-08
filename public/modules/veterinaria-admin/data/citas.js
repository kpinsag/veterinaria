// Simulación de Base de Datos en Memoria con LocalStorage
let citas = JSON.parse(localStorage.getItem('citas')) || [];

// Obtener citas desde LocalStorage
export function getCitas() {
  return JSON.parse(localStorage.getItem('citas')) || [];
}

// Agregar nueva cita
export function addCita(cita) {
  cita.id = citas.length ? citas[citas.length - 1].id + 1 : 1;
  citas.push(cita);
  saveToLocalStorage();
}

// Actualizar cita
export function updateCita(id, updatedData) {
  citas = getCitas().map(cita => (cita.id === id ? { ...cita, ...updatedData } : cita));
  saveToLocalStorage();
}

// Eliminar cita
export function deleteCita(id) {
  citas = getCitas().filter(cita => cita.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('citas', JSON.stringify(citas));
}
