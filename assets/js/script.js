let precio = 400000;
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");
let precioSpan = document.querySelector(".precio-inicial");

precioSpan.innerHTML = precio;

function suma() {
  let cantidadTotal = Number(cantidadSpan.innerHTML) + 1;
  cantidadSpan.innerHTML = cantidadTotal;
  totalSpan.innerHTML = Number(cantidadTotal) * precio;
}

function resta() {
  let cantidadTotal = Number(cantidadSpan.innerHTML) - 1;
  if (cantidadTotal >= 0) {
    cantidadSpan.innerHTML = cantidadTotal;
    totalSpan.innerHTML = Number(cantidadTotal) * precio;
  }
}
