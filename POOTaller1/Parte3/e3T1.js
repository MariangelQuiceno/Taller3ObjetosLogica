/*3. Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.*/

class CuentaBancaria {
    constructor(titular) {
      this.saldo = 0;
      this.titular = titular;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
    }
  }

  let CuentaBanco = new CuentaBancaria("Tuki");
  CuentaBanco.depositar(3000);
  console.log(`Hola, su saldo es`, CuentaBanco.saldo);
  