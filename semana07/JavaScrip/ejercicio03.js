
document.getElementById("ejercicio03").addEventListener("submit", function(event){
    event.preventDefault();

    let monto = parseFloat(document.getElementById("monto").value);
    let IGV = monto * 0.18;
    let montoTotal = monto + IGV;

    let mensaje = `El monto final es ${montoTotal.toFixed(2)} y su IGV es de ${IGV} `;

    document.getElementById("E3").textContent = mensaje; 
});
