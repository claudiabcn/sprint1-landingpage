class Cliente {
  #dni;
  #nombre;
  #apellido;
  #cuentas;

  constructor(dni, nombre, apellido) {
    this.#dni = dni;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#cuentas = [];
  }
  get dni() {
    return this.#dni;
  }
  get nombre() {
    return this.#nombre;
  }
  get apellido() {
    return this.#apellido;
  }
  get cuentas() {
    return this.#cuentas;
  }

  addCuenta(cuenta) {
    this.#cuentas.push(cuenta);
  }
}

class Cuenta {
  #numeroCuenta;
  #saldo;

  constructor(numeroCuenta, saldo) {
    this.#numeroCuenta = numeroCuenta;
    this.#saldo = saldo;
  }
  get numeroCuenta() {
    return this.#numeroCuenta;
  }
  get saldo() {
    return this.#saldo;
  }

  ingresar(importe) {
    this.#saldo += parseInt(importe);
    console.log(this);
  }
  retirar(importe) {
    const cantidad = parseInt(importe);
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
      return true;
    } else {
      console.log("Saldo insuficiente");
      return false;
    }
  }

  retornarSaldo() {
    console.log("El saldo es: " + this.saldo + "€");
  }

  toString() {
    return (
      "Cliente numeroCuenta: " +
      this.numeroCuenta +
      ", con saldo: " +
      this.saldo
    );
  }
}
