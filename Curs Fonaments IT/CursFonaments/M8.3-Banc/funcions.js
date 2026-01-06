// 0.- Definir array vacio  e introducir ejemplos. Mostrarlos por consola.
const clientes = [];

let cliente1 = new Cliente("43554711F", "Ana", "Vera");
let cliente2 = new Cliente("20533711S", "Sara", "Mansi");
let cliente3 = new Cliente("13554711A", "Clara", "Martin");
let cliente4 = new Cliente("55433711B", "Miriam", "Roig");

let cuenta1 = new Cuenta("ES031458994564454548", 0);
let cuenta2 = new Cuenta("ES021445412457714647", 0);
let cuenta3 = new Cuenta("ES078516514589945641", 0);
let cuenta4 = new Cuenta("ES012236987558966340", 0);

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);
clientes.push(cliente4);

cliente1.addCuenta(cuenta1);
cliente2.addCuenta(cuenta2);
cliente2.addCuenta(cuenta3);
cliente3.addCuenta(cuenta4);

console.log(clientes);

function crearCliente() {
  // 1.- Recoger datos, validarlos y crear si no existe.
  const dni = document.getElementById("dniAlta").value;
  const nombre = document.getElementById("nombreAlta").value;
  const apellido = document.getElementById("apellidoAlta").value;

  if (!dni || !nombre || !apellido) {
    mostrarMensaje("El dni, nombre y apellido son obligatorios.");
    return;
  }
  if (buscarCliente(dni) != -1) {
    mostrarMensaje(
      "El cliente no se puede crear porque ya está en nuestra aplicación."
    );
    return;
  }
  clientes.push(new Cliente(dni, nombre, apellido));
  mostrarMensaje("El cliente se ha creado.");

  document.getElementById("dniAlta").value = "";
  document.getElementById("nombreAlta").value = "";
  document.getElementById("apellidoAlta").value = "";
  console.log(clientes);
}
// Mostrar mensajes
function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").innerHTML = mensaje;
}

// Buscar clientes
function buscarCliente(dni) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].dni.toLowerCase() == dni.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

// Eliminar clientes
function eliminarCliente() {
  // 1.- Recoger datos
  const dni = document.getElementById("dniBaja").value.toLowerCase();
  let i = buscarCliente(dni);
  if (!dni) {
    mostrarMensaje("El dni es obligatorio.");
    return;
  }
  // 2.- Hacer la búsqueda de Cliente por dni, en función de la búsqueda,elimino al Cliente.
  if (i != -1) {
    clientes.splice(i, 1);
    mostrarMensaje("El cliente se ha eliminado.");
  } else {
    mostrarMensaje("El Cliente no existe, no se puede eliminar");
  }
  document.getElementById("dniBaja").value = "";
  console.log(clientes);
}
// Buscar cuentas

function buscarCuentaEnCliente(cliente, numeroCuenta) {
  for (let i = 0; i < cliente.cuentas.length; i++) {
    if (
      cliente.cuentas[i].numeroCuenta.toLowerCase() ===
      numeroCuenta.toLowerCase()
    ) {
      return cliente.cuentas[i];
    }
  }
  return null;
}

// Crear un numero de cuenta
function crearCuenta() {
  const dni = document.getElementById("dniCuenta").value;
  const i = buscarCliente(dni);
  const numeroCuenta = document.getElementById("numeroCuenta").value.trim();
  let saldo = 0;

  if (!dni || !numeroCuenta) {
    mostrarMensaje("El dni y número de cuenta son obligatorios.");
    return;
  }
  if (i === -1) {
    mostrarMensaje("La cuenta no se puede crear porque el cliente no existe.");
    return;
  }
  const cliente = clientes[i];
  if (buscarCuentaEnCliente(cliente, numeroCuenta) != null) {
    mostrarMensaje("La cuenta no se puede crear porque ya existe.");
    return;
  }
  const nuevaCuenta = new Cuenta(numeroCuenta, saldo);
  clientes[i].addCuenta(nuevaCuenta);

  mostrarMensaje("La cuenta se ha creado.");
  console.log(clientes);
}
// Ingresar dinero en cuenta
// 1.- Recoger datos, validarlos y ingresar si datos validos.
function ingresarDinero() {
  const dni = document.getElementById("dniIngreso").value;
  const numeroCuenta = document.getElementById("cuentaIngreso").value;
  const cantidadIngresar = parseInt(
    document.getElementById("dineroIngresar").value
  );

  // Validaciones de campos vacíos o mal ingresados
  if (!dni || !numeroCuenta || isNaN(cantidadIngresar)) {
    mostrarMensaje(
      "El dni, el número de cuenta y la cantidad a ingresar son obligatorios."
    );
    return;
  }

  if (cantidadIngresar <= 0) {
    mostrarMensaje("Tienes que ingresar una cantidad positiva.");
    return;
  }

  const i = buscarCliente(dni);
  if (i === -1) {
    mostrarMensaje("El cliente no se encuentra.");
    return;
  }

  const cliente = clientes[i];
  const cuenta = buscarCuentaEnCliente(cliente, numeroCuenta);
  if (cuenta === null) {
    mostrarMensaje("La cuenta no se encuentra para ese cliente.");
    return;
  }

  cuenta.ingresar(cantidadIngresar);
  mostrarMensaje(
    "Has ingresado: " +
      cantidadIngresar +
      " €. " +
      "Tu nuevo saldo ahora es: " +
      cuenta.saldo +
      "€."
  );
  console.log(cuenta);
  console.log(cliente);
}

// Retirar dinero en cuenta, si hay saldo suficiente
// 1.- Recoger datos, validarlos y ingresar si datos validos.
function retirarDinero() {
  const dni = document.getElementById("dniRetiro").value;
  const numeroCuenta = document.getElementById("cuentaRetiro").value;
  const cantidadRetirar = parseInt(
    document.getElementById("dineroRetirar").value
  );

  // Validaciones de campos vacíos o mal ingresados
  if (!dni || !numeroCuenta || isNaN(cantidadRetirar)) {
    mostrarMensaje(
      "El dni, el número de cuenta y la cantidad a retirar son obligatorios."
    );
    return;
  }

  if (cantidadRetirar <= 0) {
    mostrarMensaje("Tienes que retirar una cantidad positiva.");
    return;
  }

  const i = buscarCliente(dni);
  if (i === -1) {
    mostrarMensaje("El cliente no se encuentra.");
    return;
  }

  const cliente = clientes[i];
  const cuenta = buscarCuentaEnCliente(cliente, numeroCuenta);
  if (cuenta === null) {
    mostrarMensaje("La cuenta no se encuentra para ese cliente.");
    return;
  }

  if (cuenta.retirar(cantidadRetirar)) {
    mostrarMensaje(
      "Has retirado: " +
        cantidadRetirar +
        " €. " +
        "Tu nuevo saldo ahora es: " +
        cuenta.saldo +
        "€."
    );
  } else {
    mostrarMensaje(
      "No tienes saldo suficiente en la cuenta para retirarlo. Tienes solamente: " +
        cuenta.saldo +
        "€."
    );
  }

  console.log(cuenta);
  console.log(cliente);
}
