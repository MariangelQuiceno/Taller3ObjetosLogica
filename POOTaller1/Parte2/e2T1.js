/*2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
ladrar() de la instancia.*/

class Perro {
    constructor(nombre) {
      this.nombre = nombre;
    }
        ladrar() {
          console.log(`El perro de nombre ${this.nombre} hace ¡Woof!¡Woof!`);
          }
    }
  
let miPerro = new Perro("Pochi");
 miPerro.ladrar();