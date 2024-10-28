function Tabladel7() {
    let resultado = "";
    const cantidad = parseInt(document.getElementById("cantidad").value) || 5; 
    let contador = 0;

    for (let i = 1; contador < cantidad; i++) {
        let producto = 7 * i;
        if (producto % 2 === 0) {
            resultado += `${producto}\n`;
            contador++;
        }
    }
    document.getElementById("output1").textContent = resultado;
}