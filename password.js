let usuario = "Usuario";
let contraseña = "12345";

let ingreseUsuario = prompt("Por favor ingrese su usuario.");
let ingresePass = prompt("Por favor ingrese su contraseña.");

for (let i = 0; i < 3; i++) {
        if ((ingreseUsuario == usuario) && (ingresePass == contraseña)){
                alert("Bienvenido Usuario");
                break;
        }else{
                alert("Error: Usuario o contraseña incorrectos");
                
        }
        if (i != 2) {
        ingreseUsuario = prompt("Por favor ingrese su usuario.");
        ingresePass = prompt("Por favor ingrese su contraseña.");
        }
}

///////////////////////////////////////////////////////////

alert("Bienvenido. Por favor ingrese los datos solicitados");
function solicitarUsuario(){
        let usuarioIngresado = prompt("Ingrese su usuario");
        alert("El usuario ingresado es " + usuarioIngresado);
    }
function solicitarPass(){
        let passIngresada = prompt("Ingrese su contraseña");
        alert("La contraseña ingresada es " + passIngresada);
    }
function solicitarMail(){
        let mailIngresado = prompt("Ingrese su email");
        alert("El email ingresado es " + mailIngresado);
    }
solicitarUsuario();
solicitarPass();
solicitarMail();