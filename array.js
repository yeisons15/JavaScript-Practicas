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
favoriteFoods[3]="Suchi"
console.log(favoriteFoods)
favoriteFoods.push("Pizza")
console.log(favoriteFoods)
console.log("El tamaño del arreglo es: " + favoriteFoods.length)
