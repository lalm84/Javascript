var valornota1 = prompt("Ingrese 1er valor");
var valornota2 = prompt("Ingrese 2do valor");
var valornota3 = prompt("Ingrese 3er valor");

function promedio (nota1, nota2, nota3) {
        return (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3;        
}
alert("El promedio es:"+promedio(valornota1, valornota2, valornota3))