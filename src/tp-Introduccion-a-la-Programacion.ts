/*
TP Introducción a la Programación – COMISIÓN A TDF
Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led
*/
let cantidad: number = Number(
  prompt("Ingrese la cantidad de productos que va a llevar")
);

let nombreProductos: string[] = new Array(cantidad);
let precioProductos: number[] = new Array(cantidad);
let catidadPorProducto: number[] = new Array(cantidad);

//Funcion de cargar compra
function cargarProductos(
  cantProducto: number,
  nombreProductos: string[],
  precioProductos: number[],
  catidadPorProducto: number[]
): void {
  for (let i: number = 0; i < cantProducto; i++) {
    nombreProductos[i] = String(
      prompt("Ingrese nombre del producto " + (i + 1) + " : ")
    );
    precioProductos[i] = Number(prompt("Precio del producto:"));
    catidadPorProducto[i] = Number(prompt("Cantidad a llevar del producto:"));
  }
}

//Funcion calcular precio totyal de la compra
function calcularTotal(
  precioProductos: number[],
  catidadPorProducto: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < precioProductos.length; i++) {
    total = total + precioProductos[i] * catidadPorProducto[i];
  }
  return total;
}

//Funcion de sorteo
function sorteo(totalCompra: number): string {
  let mensaje: string = "No participa del sorteo";
  if (totalCompra > 3000) {
    mensaje = "Con su compra participa por un 0km";
  } else {
    if (totalCompra > 2000 && totalCompra <= 3000) {
      mensaje = "Con su compra participa por una moto 0k";
    } else {
      if (totalCompra > 1000 && totalCompra <= 2000) {
        mensaje = "Con su compra participa participa por un tv led";
      }
    }
  }

  return mensaje;
}

//Funcion mostrar detalle de compra
function detalleDeCompra(
  cantProducto: number,
  nombreProductos: string[],
  precioProductos: number[],
  catidadPorProducto: number[],
  totalCompra: number,
  mensajeSorteo: string
): void {
  console.log("### DETALLES DE COMPRA ###");

  for (let i: number = 0; i < cantProducto; i++) {
    console.log(
      "Producto " +
        (i + 1) +
        " : " +
        nombreProductos[i] +
        "\n Cantidad: " +
        catidadPorProducto[i] +
        "\n Precio: $" +
        precioProductos[i]
    );
  }
  console.log("Total: " + totalCompra + " -- " + mensajeSorteo + " -- ");
}

cargarProductos(cantidad, nombreProductos, precioProductos, catidadPorProducto);
let totalCompra: number = calcularTotal(precioProductos, catidadPorProducto);
let resultadoSorteo: string = sorteo(totalCompra);
detalleDeCompra(
  cantidad,
  nombreProductos,
  precioProductos,
  catidadPorProducto,
  totalCompra,
  resultadoSorteo
);
