// Actividad
// Pidiendo al usuario que ingrese el precio del producto
let precioIngresado: number = Number(prompt("Ingrese el precio del producto:"));

//Descuento a aplicar al producto va a ser de 10%
let descuento: number = 0.1;

//Realizando el desacuento del 10%
let precioDescuento: number = precioIngresado * descuento;

//Guardando el precio final
let precioFinal: number = precioIngresado - precioDescuento;

console.log("Precio con descuento $" + precioFinal);
