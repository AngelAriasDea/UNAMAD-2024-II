function Promedio() {
    let alumnos = [
        { nombre: "Fiorella", notas: [17, 18, 19] },
        { nombre: "Matias", notas: [10, 9, 10] },
        { nombre: "Julio", notas: [18, 17, 20] },
        { nombre: "Domitila", notas: [14, 11, 8] }
    ];

    let resultado = "Promedios de los alumnos:\n";

    for (let i = 0; i < alumnos.length; i++) {
        let sumNotas = 0;

        for (let j = 0; j < alumnos[i].notas.length; j++) {
            sumNotas += alumnos[i].notas[j];
        }

        let promedio = (sumNotas / alumnos[i].notas.length).toFixed(2);
        resultado += `- ${alumnos[i].nombre}: Promedio = ${promedio}\n`;
    }

    document.getElementById("resultado2").textContent = resultado;
}
