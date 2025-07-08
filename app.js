// Variables y arrays
const productos = [
  { id: 1, nombre: "Auriculares", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 9000 },
  { id: 3, nombre: "Teclado", precio: 12000 }
];
let carrito = [];

// Función 1: Mostrar productos
function mostrarProductos() {
  console.log("Productos disponibles:");
  productos.forEach(p => {
    console.log(`${p.id}. ${p.nombre} - $${p.precio}`);
  });
}

// Función 2: Agregar al carrito
function agregarAlCarrito() {
  let continuar = true;
  while (continuar) {
    const idElegido = parseInt(prompt("Ingrese el ID del producto que desea comprar:\n1. Auriculares\n2. Mouse\n3. Teclado"));
    const producto = productos.find(p => p.id === idElegido);
    
    if (producto) {
      carrito.push(producto);
      alert(`${producto.nombre} fue agregado al carrito.`);
    } else {
      alert("Producto no encontrado.");
    }

    continuar = confirm("¿Desea agregar otro producto?");
  }
}

// Función 3: Finalizar compra
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito.");
    return;
  }

  let total = carrito.reduce((sum, p) => sum + p.precio, 0);
  let resumen = "Resumen de compra:\n";
  carrito.forEach((item, i) => {
    resumen += `${i + 1}. ${item.nombre} - $${item.precio}\n`;
  });
  resumen += `\nTotal a pagar: $${total}`;
  alert(resumen);
  console.log("Compra finalizada:", resumen);
}

// Llamadas a las funciones
mostrarProductos();
agregarAlCarrito();
finalizarCompra();
