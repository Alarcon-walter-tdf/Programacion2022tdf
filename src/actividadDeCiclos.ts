let primerNumero: number = Number(prompt("Ingrese un numero:"));
let segundoNumero: number = Number(prompt("Ingrese un segundo numero:"));

let sumaTotal: number = 0;

if (primerNumero <= segundoNumero) {
  for (let indice: number = primerNumero; indice <= segundoNumero; indice++) {
    sumaTotal = sumaTotal + indice;
  }
} else {
  for (let indice: number = segundoNumero; indice <= primerNumero; indice++) {
    sumaTotal = sumaTotal + indice;
  }
}
console.log(
  "La suma de todos los números que están entre " +
    primerNumero +
    " y " +
    segundoNumero +
    " es: " +
    sumaTotal
);
