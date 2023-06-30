/*5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
operación.*/


class CuentaBancaria {
    constructor(titular) {
      this.saldo = 0;
      this.titular = titular;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Retiraste la siguiente ${cantidad} de tu cuenta. Tu saldo actual es: ${this.saldo}`);
      } else {
        console.log("No tienes suficiente saldo en tu cuenta.");
      }
    }
  }
  
  let miCuenta = new CuentaBancaria("Lola");
  miCuenta.depositar(2000); 
  miCuenta.retirar(8000); 
  miCuenta.retirar(1500);
  