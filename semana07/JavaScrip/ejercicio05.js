
document.getElementById("ejercicio05").addEventListener("submit", function(event){
    event.preventDefault();
    let cadena1 = document.getElementById("cadena1").value;
    let cadena2 = document.getElementById("cadena2").value;

    if(cadena1.length > cadena2.length){
        resultado = cadena2 + cadena1 + cadena2;
    } else {
        resultado = cadena1 + cadena2 + cadena1;
    }

    document.getElementById("E5").textContent = `La cadena termina como: ${resultado}`;
    document.getElementById("ejercicio05").reset();
});