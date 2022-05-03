//Ejercicio – Determinar Medalla - Código
let posicionIngresada: number = Number(prompt("Ingrese posicion de llegada: "));

console.log("Se ingreso el puesto " + posicionIngresada + "°");

if (posicionIngresada === 1) {
  console.log("Se entrega medalla de oro");
} else {
  if (posicionIngresada === 2) {
    console.log("Se entrega medalla de plata");
  } else {
    if (posicionIngresada === 3) {
      console.log("Se entrega medalla de bronce");
    } else {
      console.log("Se entrega mención de participación");
    }
  }
}
