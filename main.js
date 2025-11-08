// Declaración de variables
var clave = 121212;
var saldo = 1000000;
var usuario = "Jessica"; // Un usuario de ejemplo

// Función para validar usuario y contraseña
function validarUsuario(u, c) {
    if (u == usuario && c == clave) {
        return true;
    }
    return false;
}

// Función para el inicio de sesión
function login() {
    var usuarioIngresado = prompt("Digite el usuario");
    var claveIngresada = parseInt(prompt("Digite la contraseña"));
    return validarUsuario(usuarioIngresado, claveIngresada);
}

// Función para retirar dinero
function retirar(valor) {
    if (valor > saldo) {
        return false; // No se puede retirar más del saldo
    }
    saldo = saldo - valor;
    return true;
}

// Función para depositar dinero
function depositar(valor) {
    saldo = saldo + valor;
    return true;
}

// Función para ejecutar la acción seleccionada
function accion(opcion) {
    if (opcion == 1) { // 1 = Depositar
        var valor = parseInt(prompt("Digite el valor a depositar"));
        if (depositar(valor)) {
            console.log("Depósito realizado correctamente.");
        }
    } else if (opcion == 2) { // 2 = Retirar
        var valor = parseInt(prompt("Digite el valor a retirar"));
        if (retirar(valor)) {
            console.log("Retiro realizado correctamente.");
        } else {
            console.log("No hay fondos suficientes para retirar.");
        }
    } else {
        console.log("Opción no válida.");
    }
}

// Función principal que inicia el programa
function ejecutar() {
    if (login() != true) {
        console.log("Usuario o contraseña inválido");
        return;
    }

    var opcion = parseInt(prompt("¿Qué desea hacer?\n1. Depositar\n2. Retirar"));
    accion(opcion);

    console.log("Saldo actual: $", saldo);
}

// Llamar a la función para iniciar el cajero
ejecutar();