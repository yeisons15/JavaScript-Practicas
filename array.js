const Frutas = new Array ("Melon", "Pera");

Frutas.push('Durazno');

console.log(Frutas)

Frutas.push('Manzana');

console.log(Frutas)

/*

🧪 Nivel 1 – Básico
🟢 Ejercicio 1: Crear un array de tus comidas favoritas
Crea un array llamado comidasFavoritas con al menos 4 elementos. Luego:

Muestra el segundo elemento.

Cambia el último por "Sushi".

Agrega "Pizza" al final.

Muestra la longitud del array.

*/



console.log("---------------")
const favoriteFoods = ["Bandeja Paisa", "Picada", "Ajiaco", "Pasta"]
console.log(favoriteFoods)
console.log(favoriteFoods[1])
favoriteFoods[3]="Sushi"
console.log(favoriteFoods)
favoriteFoods.push("Pizza")
console.log(favoriteFoods)
console.log("El tamaño del arreglo es: " + favoriteFoods.length)



/*
🟢 Ejercicio 2: Acceder a elementos
Crea un array llamado colores con 3 colores. Luego imprime:
El primer color
El último color (usando .length - 1)
*/

console.log("--------------------Ejercicio # 2 -------------------------")
const colores = ["amarillo", "azul", "rojo"];
console.log(colores)
console.log(colores[0])
console.log(colores[colores.length-1])

/*
🔁 Nivel 2 – Mutabilidad
🟡 Ejercicio 3: Agregar y eliminar elementos
Crea un array numeros = [10, 20, 30].
Usa push para agregar 40.
Usa pop para eliminar el último número.
Muestra el array final. */

console.log("--------------------Ejercicio # 3 -------------------------")
const numeros = [10, 20, 30]
console.log(numeros)
numeros.push(40)
console.log(numeros)
numeros.pop()
console.log(numeros)
