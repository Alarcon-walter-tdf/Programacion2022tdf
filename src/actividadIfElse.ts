/* Desarrollar un algoritmo que dado un número, 
ingresado por el usuario determine si el número 
es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo 
con switch
*/

/*Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
con else if */
let primerNumero: number = Number(prompt("Ingrese un numero:"));

let segundoNumero: number = Number(prompt("Ingrese un segundo numero:"));

let tercerNumero: number = Number(prompt("Ingrese un tercer numero:"));

if (primerNumero > segundoNumero ) {
  if (primerNumero > tercerNumero) {
    console.log("El primer numero es mayor");
  } else {
    if (tercerNumero > segundoNumero) {
      console.log("El primer numero es mayor");
    } else {
      
    }
  }
  
} else {
  
}


