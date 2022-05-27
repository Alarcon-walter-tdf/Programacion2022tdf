//Algoritmo de Suma de Arreglos

function cargarVector(arregloParametro: number[], longuitud: number): void {
  for (let i: number = 0; i < longuitud; i++) {
    arregloParametro[i] = Number(prompt("Ingrese Valores:"));
  }
}

function sumarVectores(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[]
): void {
  for (let i: number = 0; i < arreglo3.length; i++) {
    arreglo3[i] = arreglo1[i] + arreglo2[i];
  }
}

function imprimirValores(resultado: number[]): void {
  for (let indice: number = 0; indice < 6; indice++) {
    console.log(resultado[indice]);
  }
}

//Declarando mis varibles de arreglo
let arregloUno: number[] = new Array(6);
let arregloDos: number[] = new Array(6);
let suma: number[] = new Array(6);

cargarVector(arregloUno, 6);
cargarVector(arregloDos, 6);
sumarVectores(arregloUno, arregloDos, suma);
imprimirValores(suma);

/*

//Algoritmo de Suma de Arreglos

//Declarando mis varibles de arreglo
let arregloUno: number[] = new Array(6);
let arregloDos: number[] = new Array(6);
let suma: number[] = new Array(6);
let indice: number;

//Cargando arreglo 1
for (indice = 0; indice < 6; indice++) {
  arregloUno[indice] = Number(
    prompt("Ingre numero de arreglo 1 posicion " + indice + " :")
  );
}

//Cargando arreglo 2
for (indice = 0; indice < 6; indice++) {
  arregloDos[indice] = Number(
    prompt("Ingre numero arreglo 2 posicion " + indice + " :")
  );
}

//Sumado los valores y mostrando por consola
for (indice = 0; indice < 6; indice++) {
  suma[indice] = arregloUno[indice] + arregloDos[indice];
  console.log(suma[indice]);
}


*/
