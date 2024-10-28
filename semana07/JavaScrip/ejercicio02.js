
document.getElementById("ejercicio02").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero = document.getElementById("numero").value;
    let mensaje;
    if (numero > 0) {
         mensaje = `El numero ${numero} es positivo`;
    } else if (numero < 0) {
         mensaje = `El numero ${numero} es negativo`;
    } else {
         mensaje = `El numero ${numero} es 0`;
    }

    document.getElementById("E2").textContent = mensaje; 
});
