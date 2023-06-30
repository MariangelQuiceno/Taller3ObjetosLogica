/*6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual
después de la operación.*/

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
        console.log(`Retiraste la siguiente cantidad: ${cantidad} de tu cuenta. Tu saldo actual es: ${this.saldo}`);
      } else {
        console.log("No tienes suficiente saldo en tu cuenta.");
      }
    }
  }
  
  let CuentaB = new CuentaBancaria("Lucas");
  CuentaB.depositar(500); 
  CuentaB.retirar(50);
  CuentaB.log(CuentaB.saldo); 
  
