
document.getElementById("ejercicio04").addEventListener("submit", function(event){

    event.preventDefault();
    let montoTotal = parseFloat(document.getElementById("montoTotal").value);
    let montoPA = montoTotal / 3;

    document.getElementById("E4").textContent = `La cantidad de dinero que cada amigo tiene que poner es de : ${montoPA}`;
    document.getElementById("ejercicio04").reset();
});