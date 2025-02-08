// Simulación de Base de Datos en Memoria con LocalStorage
let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];

// Obtener mascotas desde LocalStorage
export function getMascotas() {
  return JSON.parse(localStorage.getItem('mascotas')) || [];
}

// Agregar nueva mascota
export function addMascota(mascota) {
  mascota.id = mascotas.length ? mascotas[mascotas.length - 1].id + 1 : 1;
  mascotas.push(mascota);
  saveToLocalStorage();
}

// Actualizar mascota
export function updateMascota(id, updatedData) {
  mascotas = getMascotas().map(mascota => (mascota.id === id ? { ...mascota, ...updatedData } : mascota));
  saveToLocalStorage();
}

// Eliminar mascota
export function deleteMascota(id) {
  mascotas = getMascotas().filter(mascota => mascota.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('mascotas', JSON.stringify(mascotas));
}
