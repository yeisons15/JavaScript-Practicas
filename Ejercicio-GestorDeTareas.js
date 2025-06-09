/*
Ejercicio: Sistema de Gestión de Tareas
Objetivo: Crear un sistema simple para gestionar una lista de tareas. Deberás implementar funciones que permitan agregar tareas, 
filtrarlas por estado (completadas o no completadas) y obtener un resumen del estado de las tareas. Además, usarás un closure para 
mantener un contador de tareas completadas.

Requisitos:

1. Crear una función para gestionar tareas:
    Usa un closure para mantener un arreglo privado de tareas y un contador de tareas completadas.
    La función debe devolver métodos para:
        - Agregar una tarea (con nombre y estado: completada o no).
        - Filtrar tareas por estado (completadas o no completadas).
        - Obtener un resumen con el número total de tareas y cuántas están completadas.
        - Marcar una tarea como completada por su índice.
2. Usar conceptos de las notas:
    - Usa una función pura para calcular el porcentaje de tareas completadas.
    - Usa arrow functions para las funciones internas.
    - Asegúrate de respetar el scope (las variables del closure no deben ser accesibles desde fuera).
    - Usa métodos de arrays como .filter() y .forEach() para manejar las tareas.
    - Evita efectos secundarios en la función pura.
3. Pruebas en consola:
    - Agrega al menos 3 tareas.
    - Marca una como completada.
    - Muestra las tareas no completadas.
    - Muestra el resumen del sistema.

*/


// Función pura para calcular el porcentaje de tareas completadas

const calcularPorcentajeCompletadas = (completadas, total) => {
    // uso de operador ternario 0 ? 0 | como el if else
    return total === 0 ? 0 : ((completadas / total)*100).toFixed(2);
};

// Closure para gestionar tareas
function crearGestorTareas(){
    // Variables privadas (scope local)
    let tareas = [];
    let contadorCompletas = 0;

    return{
        // Método para agregar una tarea
        agregarTarea : (nombre, completada = false) => {
            tareas.push ({nombre, completada});
            if (completada) contadorCompletas++;
        },

        // Método para filtrar tareas por estado
        filtrarPorEstado : (completada) => {
            return tareas.filter((tarea) => tarea.completada === completada);
        },

        // Método para marcar una tarea como completada
        marcarCompletada: (indice) => {
            if(indice >= 0 && indice < tareas.length && !tareas[indice].completada){
                tareas[indice].completada = true;
                contadorCompletas++;
            }
        },

        // Método para obtener un resumen
        obtenerResumen: () => {
            const total = tareas.length;
            const porcentaje = calcularPorcentajeCompletadas(contadorCompletas, total);

            return{
                totalTareas: total,
                tareasCompletadas: contadorCompletas,
                porcentajeCompletadas: `${porcentaje}%`,
            };
        },
    };
}

// Crear una instancia del gestor de tareas
const gestor = crearGestorTareas();

// Pruebas
console.log("=== Sistema de Gestión de Tareas ===");

// Agregar tareas
gestor.agregarTarea("Estudiar JavaScript", false);
gestor.agregarTarea("Hacer ejercicio", false);
gestor.agregarTarea("Leer un libro", true);

console.log("Tareas iniciales:");
gestor.filtrarPorEstado(false).forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea.nombre} (Completada: ${tarea.completada})`);
});

// Marcar una tarea como completada
console.log("\nMarcando 'Estudiar JavaScript' como completada...");
gestor.marcarCompletada(0);

// Mostrar tareas no completadas
console.log("\nTareas no completadas:");
gestor.filtrarPorEstado(false).forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea.nombre} (Completada: ${tarea.completada})`);
});

// Mostrar resumen
console.log("\nResumen del sistema:");
const resumen = gestor.obtenerResumen();
console.log(`Total de tareas: ${resumen.totalTareas}`);
console.log(`Tareas completadas: ${resumen.tareasCompletadas}`);
console.log(`Porcentaje completadas: ${resumen.porcentajeCompletadas}`);
