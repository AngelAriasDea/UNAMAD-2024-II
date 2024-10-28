function sumaMenores() {
    const numero = parseInt(document.getElementById("numero_suma").value);
    let suma = 0;
    let resultado = "";

    for (let i = 1; i < numero; i++) {
        suma += i;
        resultado += i;
        if (i < numero) {
            resultado += " + "; 
        }
    }
    
    resultado += ` = ${suma}`; 
    document.getElementById("output2").textContent = resultado;
}