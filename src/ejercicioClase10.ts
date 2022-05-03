let numeroIngresado: number = Number(prompt("Ingrese un numero:"));

if (numeroIngresado <= 20) {
  console.log("Es menor a 20");
} else {
  console.log("Es mayor a 20");
}

if (numeroIngresado % 2 === 0 && numeroIngresado >= 20) {
  console.log("Es par y mayor a 20");
} else {
  if (numeroIngresado > 20) {
    console.log("Es impar y mayor a 20");
  } else {
    console.log("Es impar y menor a 20");
  }
}
