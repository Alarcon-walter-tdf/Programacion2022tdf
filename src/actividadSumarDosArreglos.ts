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
