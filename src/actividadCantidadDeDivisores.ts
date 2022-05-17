function esDivisor(numero: number, i: number): number {
  let cantidad: number = 0;
  while (i <= numero) {
    if (numero % i === 0) {
      cantidad++;
    }
    return cantidad;
  }
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esDivisor(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numeroIngresado: number = Number(prompt("Ingrese un numero: "));

let totalDivisores: number = cantidadDeDivisores(numeroIngresado);

console.log(
  "El numero " + numeroIngresado + " tiene " + totalDivisores + " divisores."
);
