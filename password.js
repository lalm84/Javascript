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

///////////////////////////////////////////////////////////////////

var valornota1 = prompt("Ingrese 1er valor");
var valornota2 = prompt("Ingrese 2do valor");
var valornota3 = prompt("Ingrese 3er valor");

function promedio (nota1, nota2, nota3) {
        return (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3;        
}
alert("El promedio es:"+promedio(valornota1, valornota2, valornota3))

/////////////////////////////////////////////////////////////////////

function reg1(usuario, hora) { 
	this.usuario = usuario;
	this.hora = hora;
}

function ingreso() {
        var login = new reg1("Juan Carlos", new Date());
        console.log(login);
}

/////////////////////////////////////////////////////////////////////////

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

