let precioProducto: number = Number(prompt("Ingrese el precio del producto:"));
let cantidadProducto: number = Number(prompt("Ingrese cantidad:"));

let precioCantidad: number = precioProducto * cantidadProducto;

console.log("Precio del producto: $" + precioProducto);
console.log("Cantidad: " + cantidadProducto + " unidad");

if (precioCantidad > 1000) {
  let descuento: number = precioCantidad * 0.1;
  let descuentoAplicado = precioCantidad - descuento;
  console.log(
    "Total de la compra: $" + descuentoAplicado + " (con descuento del 10%)"
  );
} else {
  console.log(
    "Total de la compra: $" + precioCantidad + " (no se aplico descuento)"
  );
}
