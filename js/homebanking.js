//Declaración de variables
var nombreUsuario = '';
var saldoCuenta = 0;
var limiteExtraccion = 0;

//Funciones que tenes que completar
function sumarDinero(dinero) {
  saldoCuenta += dinero;
}

function restarDinero(dinero) {
  saldoCuenta -= dinero;
}

function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt('Ingrese el nuevo limite de extraccion:'));
  limiteExtraccion = nuevoLimite;
  if (isNaN(nuevoLimite)) {
    alert('Debe ingresar el limite deseado.');
  } else {
    actualizarLimiteEnPantalla();
    alert('El nuevo limite de extraccion es de $' + nuevoLimite);
  }
}

function haySaldo(monto) {
  if (monto > saldoCuenta) {
    alert('Saldo insuficiente.');
    return false;
  } else {
    return true;
  }
}

function superaLimite(monto) {
  if (monto > limiteExtraccion) {
    alert('Su limite de extraccion es de: ' + limiteExtraccion + '\n' +
      'Ingrese un nuevo monto.');
    return false;
  } else {
    return true;
  }
}

function tipoCambio(monto) {
  var billetes = ((monto % 100) == 0);
  if (billetes == false) {
    alert('Solo puedes extraer billetes de 100.');
  } else {
    return true;
  }
}

function descontarDinero(monto) {
  var montoActual = saldoCuenta;
  restarDinero(monto);
  actualizarSaldoEnPantalla();
  alert('Has retirado: $' + monto + '\n' +
    'Saldo anterior: $' + montoActual + '\n' +
    'Saldo actual: $' + saldoCuenta);
}

function extraerDinero() {
  var extraer = parseInt(prompt('Ingrese el monto a extraer:'));
  if (isNaN(extraer)) {
    alert('Debe ingresar un monto.');
  } else if (superaLimite(extraer) == true && haySaldo(extraer) == true && tipoCambio(extraer) == true) {
    descontarDinero(extraer);
  }
}

function depositarDinero() {
  var deposito = parseInt(prompt('Ingrese el monto a depositar:'));
  var montoActual = saldoCuenta;
  if (isNaN(deposito)) {
    alert('Debe ingresar un monto');
  } else {
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert('Saldo anterior: $' + montoActual + '\n' +
      'Dinero depositado: $' + deposito + '\n' +
      'Saldo actual: $' + saldoCuenta);
  }
}

function descontarServicio(monto) {
  var montoActual = saldoCuenta;
  restarDinero(monto);
  actualizarSaldoEnPantalla();
  alert('Pago efectuado.' + '\n' +
    'Saldo anterior: $' + montoActual + '\n' +
    'Dinero descontado: $' + monto + '\n' +
    'Saldo actual: $' + saldoCuenta);
}

function pagarServicio() {
  var agua = 350;
  var telefono = 425;
  var luz = 210;
  var internet = 570;
  var pregunta;
  var servicios = parseInt(prompt('1) - Agua' + '\n' +
    '2) - Telefono' + '\n' +
    '3) - Luz' + '\n' +
    '4) - Internet'));

  if (isNaN(servicios)) {
    alert('Debe ingresar el Nº de servicio.')
  } else {
    switch (servicios) {
      case 1:
        pregunta = prompt('Monto a pagar: $' + agua + '\n' +
          'Desea continuar? si / no');
        if (pregunta == 'si') {
          if (agua > saldoCuenta) {
            alert('No posee saldo suficiente para pagar.');
          } else {
            descontarServicio(agua);
          }
        } else {
          alert('Hasta la proxima !');
        }
        break;
      case 2:
        pregunta = prompt('Monto a pagar: $' + telefono + '\n' +
          'Desea continuar? si / no');
        if (pregunta == 'si') {
          if (telefono > saldoCuenta) {
            alert('No posee saldo suficiente para pagar.');
          } else {
            descontarServicio(telefono);
          }
        } else {
          alert('Hasta la proxima !');
        }
        break;
      case 3:
        pregunta = prompt('Monto a pagar: $' + luz + '\n' +
          'Desea continuar? si / no');
        if (pregunta == 'si') {
          if (luz > saldoCuenta) {
            alert('No posee saldo suficiente para pagar.');
          } else {
            descontarServicio(luz);
          }
        } else {
          alert('Hasta la proxima !');
        }
        break;
      case 4:
        pregunta = prompt('Monto a pagar: $' + internet + '\n' +
          'Desea continuar? si / no');
        if (pregunta == 'si') {
          if (internet > saldoCuenta) {
            alert('No posee saldo suficiente para pagar.');
          } else {
            descontarServicio(internet);
          }
        } else {
          alert('Hasta la proxima !');
        }
        break;
      default:
        alert('No existe el servicio que selecciono.');
    }
  }
}

function restarTransferencia(monto, cuenta) {
  restarDinero(monto);
  actualizarSaldoEnPantalla();
  alert('Transferencia realizada.' + '\n' +
    'Se han transferido: $' + monto + '\n' +
    'Cuenta destino Nº ' + cuenta + '\n' +
    'Saldo actual: $' + saldoCuenta);
}

function transferirDinero() {
  var cuentaAmiga1 = 1234567;
  var cuentaAmiga2 = 7654321;
  var montoTransferencia = parseInt(prompt('Ingrese el monto a transferir:'));
  if (isNaN(montoTransferencia)) {
    alert('Debe ingresar Nº de cuenta.')
  } else {
    if (montoTransferencia > saldoCuenta) {
      alert('No posee saldo suficiente.')
    } else {
      var nCuenta = parseInt(prompt('Ingrese el Nº de cuenta:'));
      if (nCuenta == cuentaAmiga1 || nCuenta == cuentaAmiga2) {
        restarTransferencia(montoTransferencia, nCuenta);
      } else {
        alert('Solo puede transferir dinero a cuentas declaradas.');
      }
    }
  }
}

function iniciarSesion() {
  var pass = 1234;
  nombreUsuario = 'Luciano Greco'
  var user = 'luciano2192';
  salirPlazoFijo();
  var preguntaUser = prompt('Usuario: ');
  var preguntaPass = parseInt(prompt('Contraseña: '));
  if (preguntaPass == pass && preguntaUser == user) {
    desactivarBoton('.inicio-sesion');
    alert('Bienvenido/a ' + nombreUsuario + ', ya puedes comenzar a realizar operaciones.');
    saldoCuenta = 500;
    limiteExtraccion = 2000;
    mostrarCuenta();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
  } else {
    saldoCuenta = 0;
    limiteExtraccion = 0;
    nombreUsuario = '';
    alert('Codigo incorrecto. El dinero fue retenido por seguridad.');
  }
}

function desactivarBoton(boton) {
  document.querySelector(boton).disabled = true;
}

function mostrarCuenta() {
  var show = document.querySelector('.menu-container').style.display = 'block';
}

function mostrarPlazoFijo() {
  var mostrar = document.querySelector('.plazo-fijo-container').style.display = 'block';
}

function ocultarPlazoFijo() {
  var mostrar = document.querySelector('.plazo-fijo-container').style.display = 'none';
}

function ocultarSaldoCuenta() {
  var ocultar = document.querySelector('.cuenta-info').style.display = 'none';
}

function mostrarSaldoCuenta() {
  var mostrar = document.querySelector('.cuenta-info').style.display = 'block';
}

function salirPlazoFijo() {
  ocultarPlazoFijo();
  mostrarSaldoCuenta();
  document.querySelector('input[name="monto"]').value = '';
  document.querySelector('#plazo').value = '';
}

function calcularPlazoFijo(){
  var monto = parseInt(document.querySelector('input[name="monto"]').value);
  var dias = parseInt(document.querySelector('#plazo').value);
  var tasaMensual = 2;
  var resultado = monto + (monto / 100) * tasaMensual * dias;
  alert('$' + resultado);
}

function plazoFijo() {
  ocultarSaldoCuenta();
  mostrarPlazoFijo();
}

function cerrarSesion() {
  location.reload();
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
