    function filtro() {
        let productos = [
            { nombre: "Billetera Renzo Costa", precio: 250 },
            { nombre: "Whisky Johny Walker etiqueta Azul", precio: 450 },
            { nombre: "Six Pack de Cerveza Cusqueña Trigo", precio: 45 },
            { nombre: "Set de Herramientas para Laptops", precio: 230 }
        ];

        const precioMinimo = parseFloat(document.getElementById("precioMinimo").value) || 0; 
        let filtro = productos.filter(producto => producto.precio > precioMinimo);
        let resultado = `Productos con precio mayor a S/ ${precioMinimo.toFixed(2)}:\n\n`;

        if (filtro.length > 0) {
            filtro.forEach(producto => {
                resultado += `${producto.nombre} - S/ ${producto.precio.toFixed(2)}\n`;
            });
        } else {
            resultado += "No se encontraron productos al precio ingresado.";
        }

        document.getElementById("resultado").textContent = resultado;
    }