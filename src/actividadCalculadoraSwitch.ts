function dibujarLineas() {
  let i: number;
  let linea: String = "";
  for (i = 0; i <= 20; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let primerNum: number = Number(prompt("Ingrese un numero: "));
let operacion: number = Number(
  prompt(
    "Elija una accion:\n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir"
  )
);
let segundoNum: number = Number(prompt("Ingrese otro numero: "));

let resultado: number = 0;

switch (operacion) {
  case 1:
    dibujarLineas();
    resultado = primerNum + segundoNum;
    console.log(
      "La suma entre " + primerNum + " y " + segundoNum + " es: " + resultado
    );
    dibujarLineas();
    break;

  case 2:
    dibujarLineas();
    resultado = primerNum - segundoNum;
    console.log(
      "La resta entre " + primerNum + " y " + segundoNum + " es: " + resultado
    );
    dibujarLineas();
    break;
  case 3:
    dibujarLineas();
    resultado = primerNum * segundoNum;
    console.log(
      "La multiplicacion entre " +
        primerNum +
        " y " +
        segundoNum +
        " es: " +
        resultado
    );
    dibujarLineas();

    break;
  case 4:
    dibujarLineas();
    resultado = primerNum / segundoNum;
    console.log(
      "La divicion entre " +
        primerNum +
        " y " +
        segundoNum +
        " es: " +
        resultado
    );
    dibujarLineas();

    break;

  default:
    dibujarLineas();
    console.log("No se selecciono una accion correcta");
    dibujarLineas();

    break;
}
