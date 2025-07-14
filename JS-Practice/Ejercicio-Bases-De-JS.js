/*🧪 Ejercicio Integrado: Registro de Estudiantes
🧠 Objetivo:
Poner en práctica:

Variables y Tipos de datos
Condicionales
Ciclos (for, for-of)
Funciones y Closures
Arrays y Objetos

🧩 Enunciado:
Crea un array de estudiantes, donde cada estudiante es un objeto con las propiedades:

nombre (string)
edad (number)
cursos (array de strings)

Crea una función registrarEstudiante que reciba nombre, edad y cursos, y los agregue al array.
Crea una función closure mayoriaEdad(min) que reciba una edad mínima y retorne otra función para verificar si un estudiante es mayor que esa edad.
Recorre el array con un for-of e imprime los estudiantes mayores de edad con sus cursos.
Usa condicionales para:
Mostrar si el estudiante tiene más de 2 cursos.
Mostrar si es menor de edad.*/



// 1. Array vacío para almacenar estudiantes

let estudiantes = [];


// 2. Función para registrar estudiantes

function registrarEstudiante (nombre, edad, cursos){
    // El siguiente bloque crea un objeto y lo agrega en la ultima posición al arreglo registrarEstudiante
    const estudiante = {
        nombre: nombre,
        edad: edad,
        cursos: cursos
    };
    // .push = es un método de los array para agregar un nuevo elemento al final de un array
    estudiantes.push(estudiante);
}

// 3. Closure para verificar mayoría de edad

function mayoriaEdad(min){
    return function (edad){
        return edad >= min;
    };
}
const esMayorDeEdad = mayoriaEdad(18);

// 4. Registrar algunos estudiantes

registrarEstudiante("Yeison", 35, ["Arte", "Cultura", "Diseño"]);
registrarEstudiante("Amanda", 43, ["Marketing", "Diseño"]);
registrarEstudiante("Gaby", 8, ["Matematicas", "Ciencias N", "Programación"]);

// 5. Mostrar estudiantes mayores de edad y lógica condicional

for(let estudiante of estudiantes){
    console.log("Nombre: ", estudiante.nombre);
    console.log("Cursos: ", estudiante.cursos.join(", "));

    if(esMayorDeEdad(estudiante.edad)){
        console.log("✅ Es mayor de edad");
    }else{
        console.log("⛔️ Es menor de edad");
    }

    if(estudiante.cursos.length > 2){
        console.log("⭐ Tiene muchos cursos inscritos");
    }

    console.log("------------");
}
