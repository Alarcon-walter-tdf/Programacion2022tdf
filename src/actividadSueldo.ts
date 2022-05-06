let salarioActual: number = Number(prompt("Ingrese salario actual"));
let salarioAumento: number;

if (salarioActual > 0 && salarioActual <= 15000) {
  salarioAumento = salarioActual * 0.2 + salarioActual;
  console.log(
    "El sueldo con aumento es: $" +
      salarioAumento +
      " (Se le aplico un 20% mas)"
  );
} else {
  if (salarioActual >= 15001 && salarioActual <= 20000) {
    salarioAumento = salarioActual * 0.1 + salarioActual;
    console.log(
      "El sueldo con aumento es: $" +
        salarioAumento +
        " (Se le aplico un 10% mas)"
    );
  } else {
    if (salarioActual >= 20001 && salarioActual <= 25000) {
      salarioAumento = salarioActual * 0.05 + salarioActual;
      console.log(
        "El sueldo con aumento es: $" +
          salarioAumento +
          " (Se le aplico un 5% mas)"
      );
    } else {
      if (salarioActual > 25000) {
        console.log(
          "Sueldo sin aumento : $" +
            salarioActual +
            " (No se le aplico aumento)"
        );
      }
    }
  }
}
