/*4. Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
Deposita 100 en la cuenta llamando al método depositar().
*/

class CuentaBancaria {
    constructor(titular) {
      this.saldo = 0;
      this.titular = titular;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
    }
  }
  
  let CuentaB = new CuentaBancaria("Ana");
  CuentaB.depositar(100);
  console.log(`Hola, su saldo es: `, CuentaB.saldo);