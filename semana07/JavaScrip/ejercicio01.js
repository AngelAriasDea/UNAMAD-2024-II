document.getElementById("ejercicio01").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    let mensaje = `Hola me llamo ${nombre} y mi apellido es ${apellido} y tengo la edad de ${edad} años.`;

    document.getElementById("E1").textContent = mensaje; 
});
