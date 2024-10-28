document.getElementById("ejercicio06").addEventListener("submit", function (event) {
  event.preventDefault();

  let base1 = parseFloat(document.getElementById("base1").value);
  let altura1 = parseFloat(document.getElementById("altura1").value);
  let base2 = parseFloat(document.getElementById("base2").value);
  let altura2 = parseFloat(document.getElementById("altura2").value);

  if (isNaN(base1) || isNaN(altura1) || isNaN(base2) || isNaN(altura2) || base1 <= 0 || altura1 <= 0 || base2 <= 0 || altura2 <= 0) {
      alert("Por favor, ingrese valores válidos y positivos para las bases y alturas.");
      return;
  }

  let area1 = (base1 * altura1) / 2;
  let area2 = (base2 * altura2) / 2;

  let mensaje;
  if (area1 > area2) {
      mensaje = `El primer triángulo es mayor con un área de: ${area1.toFixed(2)} y el segundo tiene un área de: ${area2.toFixed(2)}.`;
  } else if (area2 > area1) {
      mensaje = `El segundo triángulo es mayor con un área de: ${area2.toFixed(2)} y el primero tiene un área de: ${area1.toFixed(2)}.`;
  } else {
      mensaje = `Ambos triángulos tienen la misma área de: ${area1.toFixed(2)}.`;
  }

  document.getElementById("E6").textContent = mensaje;
  document.getElementById("ejercicio06").reset();
});
