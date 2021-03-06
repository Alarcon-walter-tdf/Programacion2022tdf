/*Dados estos 5 arreglos que representan las ventas semanales
 del primer trimentre, corresspondientes a 5 vendedores 
 de la empresa: Camila, Franco, Sofia, Matias y Agustina, respectivamente. 
 vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
 vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
 vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
 vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
 vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
 
 Escribir un programa que permita determinar:
 Para cada vendedor mostrar su nombre y 
 1- su venta maxima indicando semana y mes de la misma.
 2- su venta minima indicando semana y mes de la misma.
 3- su promedio semanal de ventas.
 4- su promedio mensual de ventas.
 Entre todos los vendedores calcular:
 5- nombre y monto vendido del mejor vendedor de cada semana.
 6- nombre y suma de montos vendidos del mejor vendedor de cada mes
 7- nombre y suma de montos vendidos del peor vendedor de cada mes
 8- nombre y suma de montos vendidos de peor vendedor del trimestre

 Tenga en cuenta que cada valor en los arreglos es la venta de una semana,
  y que cuatro semanas forman un mes.
*/

let vendedores: string[] = new Array(
  "Camila",
  "Franco",
  "Sofia",
  "Matias",
  "Agustina"
);

let vendedor1: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);
let vendedor2: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);
let vendedor3: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);
let vendedor4: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);
let vendedor5: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);

let maximoVendedor: number;
let minimoVendedor: number;
let mesMaximoVendedor: number;
let semanaMaximoVendedor: number;
let mesMinimoVendedor: number;
let semanaMinimoVendedor: number;
let promedioSemanalVendedor: number;
let promedioMesVendedor: number;

function ventaMaxima(vectorVentas: number[]): number {
  let max: number = vectorVentas[0];
  for (let i = 0; i < vectorVentas.length; i++) {
    if (max < vectorVentas[i]) {
      max = vectorVentas[i];
    }
  }
  return max;
}

function ventaMinima(vectorVentas: number[]): number {
  let min: number = vectorVentas[0];
  for (let i = 0; i < vectorVentas.length; i++) {
    if (min > vectorVentas[i]) {
      min = vectorVentas[i];
    }
  }
  return min;
}

function encontrarMes(datoVenta: number, datoVector: number[]): number {
  let mes: number = -1;
  for (let i = 0; i < datoVector.length; i++) {
    if (datoVector[i] === datoVenta) {
      if (i >= 0 && i <= 3) {
        mes = 1;
      } else {
        if (i >= 4 && i <= 7) {
          mes = 2;
        } else {
          if (i >= 8 && i <= 11) {
            mes = 3;
          }
        }
      }
    }
  }
  return mes;
}

function encontraSemana(datoVenta: number, datoVector: number[]): number {
  let semana: number = -1;
  for (let i = 0; i < datoVector.length; i++) {
    if (datoVector[i] === datoVenta) {
      if (i === 0 || i === 4 || i === 8) {
        semana = 1;
      } else {
        if (i === 1 || i === 5 || i === 9) {
          semana = 2;
        } else {
          if (i === 2 || i === 6 || i === 10) {
            semana = 3;
          } else {
            if (i === 3 || i === 7 || i === 11) {
              semana = 4;
            }
          }
        }
      }
    }
  }
  return semana;
}

function promedioMes(vector: number[]): number {
  let sumaTotal: number = 0;
  let promedioMensual: number;
  for (let i = 0; i < vector.length; i++) {
    sumaTotal = sumaTotal + vector[i];
  }
  promedioMensual = sumaTotal / 3;
  return promedioMensual;
}

function promedioSemanal(vector: number[]): number {
  let sumaTotal: number = 0;
  let promedioSemanal: number;
  for (let i = 0; i < vector.length; i++) {
    sumaTotal = sumaTotal + vector[i];
  }
  promedioSemanal = sumaTotal / 12;
  return promedioSemanal;
}

function mostrarInformacion(nombre: string, vectorVendedor: number[]): void {
  console.log("Nombre del vendedor: " + nombre);
  maximoVendedor = ventaMaxima(vectorVendedor);
  minimoVendedor = ventaMinima(vectorVendedor);
  mesMaximoVendedor = encontrarMes(maximoVendedor, vectorVendedor);
  semanaMaximoVendedor = encontraSemana(maximoVendedor, vectorVendedor);
  mesMinimoVendedor = encontrarMes(minimoVendedor, vectorVendedor);
  semanaMinimoVendedor = encontraSemana(minimoVendedor, vectorVendedor);
  console.log(
    "Venta Maxima: " +
      maximoVendedor +
      " en la semana " +
      semanaMaximoVendedor +
      " del mes " +
      mesMaximoVendedor
  );
  console.log(
    "Venta Minima: " +
      minimoVendedor +
      " en la semana " +
      semanaMinimoVendedor +
      " del mes " +
      mesMinimoVendedor
  );
  promedioSemanalVendedor = promedioSemanal(vectorVendedor);
  promedioMesVendedor = promedioMes(vectorVendedor);
  console.log("Promedio semanal de ventas: " + promedioSemanalVendedor);
  console.log("Promedio mensual de ventas: " + promedioMesVendedor);
}

//Pidiendo al usuario el nombre del vendedor que quiere ver
let mostrarVendedor: string = String(prompt("Ingrese nombre del vendedor:"));

//Filtrando con el nombre ingresado que arreglo voy a usar
if (mostrarVendedor === "Camila") {
  mostrarInformacion(mostrarVendedor, vendedor1);
} else {
  if (mostrarVendedor === "Franco") {
    mostrarInformacion(mostrarVendedor, vendedor2);
  } else {
    if (mostrarVendedor === "Sofia") {
      mostrarInformacion(mostrarVendedor, vendedor3);
    } else {
      if (mostrarVendedor === "Matias") {
        mostrarInformacion(mostrarVendedor, vendedor4);
      } else {
        if (mostrarVendedor === "Agustina") {
          mostrarInformacion(mostrarVendedor, vendedor5);
        } else {
          console.log("No se encontro el vendeor");
        }
      }
    }
  }
}
