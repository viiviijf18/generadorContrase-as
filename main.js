let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje'); 

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numDigitado = parseInt(cantidad.value);
    console.log('Longitud contrasena: ' + numDigitado);

    if (numDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
    } else {
        let password = '';
        for (let i = 0; i < numDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log('Caracter aleatorio ' + (i + 1) + ": " + caracterAleatorio);

            password += caracterAleatorio;
        }
        console.log('Password: ' + password);

        contrasena.value = password;

        // Llamamos a la función de validación
        validarContrasena(password);
    }
}

function validarContrasena(password) {
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);
    let esFuerte = tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial;

    if (esFuerte) {
        mensaje.textContent = "La contraseña es fuerte.";
        mensaje.className = "fuerte"; // Añade la clase de estilo para una contraseña fuerte
    } else {
        mensaje.textContent = "La contraseña es débil. Asegúrate de incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.";
        mensaje.className = "debil"; // Añade la clase de estilo para una contraseña débil
    }

}
function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
    mensaje.textContent = '';
}











