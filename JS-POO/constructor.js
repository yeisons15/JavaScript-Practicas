function Persona (nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const persona1 = new Persona ("Juan", "Perez", 30);
console.log(persona1);

const persona2 = new Persona ("Yeison", "Rojas", 35)
console.log(persona2);