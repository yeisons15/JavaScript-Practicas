const persona = {
    nombre: "Yeison",
    edad: 35,
    direccion: {
        calle: "Calle 2 # 21-55",
        ciudad: "Funza"
    },

    saludar (){
        console.log(`Hola mi nombre es ${persona.nombre}`)
    },
};

console.log(persona);
persona.saludar();


persona.telefono = "555-555-3354";

console.log(persona);

persona.despedir = () => {
    console.log("Adios");
};

console.log(persona);

delete persona.despedir;

console.log(persona);
