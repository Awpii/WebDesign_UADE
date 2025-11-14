function actualizarIconoCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoItemCount = document.getElementById('carrito-item-count');
    if (carritoItemCount) {
        carritoItemCount.textContent = carrito.length;
    }
}
document.addEventListener('DOMContentLoaded', actualizarIconoCarrito); //Actualiza lo que tiene el carrito cada que recarga la pag