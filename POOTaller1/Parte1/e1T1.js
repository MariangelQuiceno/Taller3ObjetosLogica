/*Taller de Ejercicios
1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
imprima en la consola "¡Woof!" junto al nombre del perro.*/

class Perro {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    ladrar() {
      console.log(`El perro de nombre ${this.nombre} hace ¡Woof!¡Woof!`);
    }
  }
  
  let PerroLLamado = new Perro("Bambi");
  PerroLLamado.ladrar();
  
    