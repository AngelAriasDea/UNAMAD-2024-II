function calcularGasto() {
    let precios = [50, 20, 10, 100, 30, 10];
    let presupuesto = parseInt(document.getElementById("presupuesto").value);
    let gastoTotal = 0;
    let resultado = `Presupuesto inicial: ${presupuesto}\n\n`;

    precios.forEach((precio, index) => {
        if (gastoTotal + precio <= presupuesto) { 
            gastoTotal += precio;
            resultado += `Producto ${index + 1}: S/. ${precio} - Agregado. Gasto acumulado: S/.${gastoTotal}\n`;
        } else {
            resultado += `Producto ${index + 1}: S/. ${precio} - No agregado, supera el presupuesto.\n`;
        }
    });

    resultado += `\nGasto total final: S/. ${gastoTotal} de S/.${presupuesto}\n`;
    if (gastoTotal < presupuesto) {
        resultado += `Presupuesto restante: S/.${presupuesto - gastoTotal}`;
    } else {
        resultado += `Presupuesto agotado.`;
    }

    document.getElementById("output3").textContent = resultado;
}