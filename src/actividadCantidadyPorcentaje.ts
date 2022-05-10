//Pido un valor al usuario por prompt
let numero: number = Number(prompt("Ingrese un numero:"));
//Declaro mis variables y las inicializo
let cantidadTotal: number = 0;
let cantidadPositivos: number = 0;
let porcentajePositivos: number = 0;

console.log("Ingrese numero: " + numero);

while (numero !== 0) {
  if (numero > 0) {
    cantidadPositivos += 1;
  }
  cantidadTotal += 1;

  numero = Number(prompt("Ingrese otro numero: "));
  console.log("Ingrese numero: " + numero);
}

if (cantidadTotal > 0) {
  porcentajePositivos = (cantidadPositivos * 100) / cantidadTotal;
  console.log(
    cantidadPositivos + " positivos, " + porcentajePositivos + "% del total."
  );
}
