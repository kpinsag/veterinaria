// Simulación de Base de Datos en Memoria con LocalStorage
let empleados = JSON.parse(localStorage.getItem('empleados')) || [];

// Obtener empleados
export function getEmpleados() {
  return JSON.parse(localStorage.getItem('empleados')) || [];
}

// Agregar nuevo empleado
export function addEmpleado(empleado) {
  empleado.id = empleados.length ? empleados[empleados.length - 1].id + 1 : 1;
  empleados.push(empleado);
  saveToLocalStorage();
}

// Actualizar empleado
export function updateEmpleado(id, updatedData) {
  empleados = getEmpleados().map(emp => (emp.id === id ? { ...emp, ...updatedData } : emp));
  saveToLocalStorage();
}

// Eliminar empleado
export function deleteEmpleado(id) {
  empleados = getEmpleados().filter(emp => emp.id !== id);
  saveToLocalStorage();
}

// Guardar en LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('empleados', JSON.stringify(empleados));
}
