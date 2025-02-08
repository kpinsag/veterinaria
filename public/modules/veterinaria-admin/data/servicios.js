export let servicios = [
 { id: 1, nombre: "Consulta General", descripcion: "Revisión médica general", precio: 30 },
 { id: 2, nombre: "Vacunación", descripcion: "Aplicación de vacunas esenciales", precio: 20 },
 { id: 3, nombre: "Desparasitación", descripcion: "Control de parásitos internos y externos", precio: 25 }
];

// Funciones para manejar el CRUD de servicios
export function getServicios() {
 return servicios;
}

export function addServicio(servicio) {
 servicio.id = servicios.length ? servicios[servicios.length - 1].id + 1 : 1;
 servicios.push(servicio);
 actualizarLocalStorage();
}

export function updateServicio(id, servicioActualizado) {
 const index = servicios.findIndex(servicio => servicio.id === id);
 if (index !== -1) {
     servicios[index] = { ...servicios[index], ...servicioActualizado };
     actualizarLocalStorage();
 }
}

export function deleteServicio(id) {
 servicios = servicios.filter(servicio => servicio.id !== id);
 actualizarLocalStorage();
}

function actualizarLocalStorage() {
 localStorage.setItem("servicios", JSON.stringify(servicios));
}

// Cargar servicios desde localStorage si existen
if (localStorage.getItem("servicios")) {
 servicios = JSON.parse(localStorage.getItem("servicios"));
}
