// Array de productos
const productos = [
  { id: 1, nombre: "Auriculares", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 9000 },
  { id: 3, nombre: "Teclado", precio: 12000 }
];

// Recuperar o inicializar carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// DOM
const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");
const totalTexto = document.getElementById("total");
const btnVaciar = document.getElementById("vaciarCarrito");

// Renderizar productos
function mostrarProductos() {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    contenedorProductos.appendChild(div);
  });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Mostrar carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });

  totalTexto.textContent = `Total: $${total}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  localStorage.removeItem("carrito");
});

// Iniciar
mostrarProductos();
actualizarCarrito();
