//Funcion de cargar alumno en los arreglos
function cargarAlumnos(
  cantAl: number,
  nombre: string[],
  nota1: number[],
  nota2: number[],
  nota3: number[]
): void {
  for (let i: number = 0; i < cantAl; i++) {
    nombre[i] = String(prompt("Nombre del Alumno " + (i + 1) + " : "));
    nota1[i] = Number(prompt("Ingrese nota del 1° trimestre:"));
    nota2[i] = Number(prompt("Ingrese nota del 2° trimestre:"));
    nota3[i] = Number(prompt("Ingrese nota del 3° trimestre:"));
  }
}

//Funcion para verificar si el nombre del alumno se encuentra en la lista
function encontrarAlumno(
  cantAlumnos: number,
  buscarAlumno: string,
  nombreAlumnos: string[]
): boolean {
  let i: number = 0;
  while (i < cantAlumnos) {
    if (nombreAlumnos[i] === buscarAlumno) {
      return true;
    }
    i++;
  }
  return false;
}

//Funcion para encontrar el indice del alumno
function buscarIndice(
  alumnoEncontrado: boolean,
  cantAlumnos: number,
  buscarAlumno: string,
  nombreAlumnos: string[]
): number {
  let indiceAl: number = 0;
  while (indiceAl < cantAlumnos && alumnoEncontrado) {
    if (nombreAlumnos[indiceAl] === buscarAlumno) {
      return indiceAl;
    }
    indiceAl++;
  }
  return indiceAl;
}

//Funcion para mostrar el promedio del alumno
function mostrarPromedio(
  indiceAlum: number,
  nombre: string[],
  nota1: number[],
  nota2: number[],
  nota3: number[]
): void {
  let promedioAnual: number =
    (nota1[indiceAlum] + nota2[indiceAlum] + nota3[indiceAlum]) / 3;
  console.log(
    "Promedio Anual del Alumno " +
      nombre[indiceAlum] +
      "\n Nota 1er cuatrimestre: " +
      nota1[indiceAlum] +
      "\n Nota 2do cuatrimestre: " +
      nota2[indiceAlum] +
      "\n Nota 3er cuatrimestre: " +
      nota3[indiceAlum] +
      "\n Promedio Anual: " +
      promedioAnual
  );
}

let cantAlumnos: number = Number(prompt("Ingrese cantidad de alumnos: "));
let nombreAlumnos: string[] = new Array(cantAlumnos);
let nota1: number[] = new Array(cantAlumnos);
let nota2: number[] = new Array(cantAlumnos);
let nota3: number[] = new Array(cantAlumnos);

cargarAlumnos(cantAlumnos, nombreAlumnos, nota1, nota2, nota3);

let buscarAlumno: string = String(prompt("Ver Promedio de un Alumno"));

let alumnoEncontrado: boolean = encontrarAlumno(
  cantAlumnos,
  buscarAlumno,
  nombreAlumnos
);

if (alumnoEncontrado) {
  let indiceEncontrado: number = buscarIndice(
    alumnoEncontrado,
    cantAlumnos,
    buscarAlumno,
    nombreAlumnos
  );

  mostrarPromedio(indiceEncontrado, nombreAlumnos, nota1, nota2, nota3);
} else {
  console.log("No se encontro al alumno " + buscarAlumno);
}
