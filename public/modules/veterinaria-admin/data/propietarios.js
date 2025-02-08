// Simulación de Base de Datos en Memoria con LocalStorage
let propietarios = JSON.parse(localStorage.getItem('propietarios')) || [];

// Obtener propietarios desde LocalStorage
export function getPropietarios() {
  return JSON.parse(localStorage.getItem('propietarios')) || [];
}

// Agregar un nuevo propietario
export function addPropietario(propietario) {
  propietario.id = propietarios.length ? propietarios[propietarios.length - 1].id + 1 : 1;
  propietarios.push(propietario);
  saveToLocalStorage();
}

// Actualizar propietario
export function updatePropietario(id, updatedData) {
  propietarios = getPropietarios().map(prop => (prop.id === id ? { ...prop, ...updatedData } : prop));
  saveToLocalStorage();
}

// Eliminar propietario
export function deletePropietario(id) {
  propietarios = getPropietarios().filter(prop => prop.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('propietarios', JSON.stringify(propietarios));
}
