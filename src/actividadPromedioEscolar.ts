//Declaro mis variables
/*let cantAlumnos: number = Number(prompt("Ingrese cantidad de alumnos: "));
let nombreAlumnos: string[] = new Array(cantAlumnos);
let nota1: number[] = new Array(cantAlumnos);
let nota2: number[] = new Array(cantAlumnos);
let nota3: number[] = new Array(cantAlumnos);
let indice: number;

for (indice = 0; indice < cantAlumnos; indice++) {
  nombreAlumnos[indice] = String(
    prompt("Nombre del Alumno " + (indice + 1) + " : ")
  );

  nota1[indice] = Number(prompt("Ingrese nota del 1° trimestre:"));
  nota2[indice] = Number(prompt("Ingrese nota del 2° trimestre:"));
  nota3[indice] = Number(prompt("Ingrese nota del 3° trimestre:"));
}

let buscarAlumno: string = String(prompt("Ver Promedio de un Alumno"));

let promedioAnual: number = 0;
let alumnoEncontrado: boolean = false;
indice = 0;

while (indice < cantAlumnos && !alumnoEncontrado) {
  if (nombreAlumnos[indice] === buscarAlumno) {
    promedioAnual = (nota1[indice] + nota2[indice] + nota3[indice]) / 3;
    alumnoEncontrado = true;
  }
  indice++;
}

if (alumnoEncontrado) {
  indice = indice - 1;
  console.log(
    "Promedio Anual del Alumno " +
      nombreAlumnos[indice] +
      "\n Nota 1er cuatrimestre: " +
      nota1[indice] +
      "\n Nota 2do cuatrimestre: " +
      nota2[indice] +
      "\n Nota 3er cuatrimestre: " +
      nota3[indice] +
      "\n Promedio Anual: " +
      promedioAnual
  );
} else {
  console.log("No se encontro al alumno " + buscarAlumno);
}

*/
