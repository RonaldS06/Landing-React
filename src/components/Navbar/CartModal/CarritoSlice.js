// carritoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: JSON.parse(localStorage.getItem("carrito")) || [],
    cantidadTotal: parseInt(localStorage.getItem("cantidadTotal")) || 0,
};

const carritoSlice = createSlice({
    name: "carrito",
    initialState: initialState,
    reducers: {
        agregarProducto: (state, action) => {
            const { id, title, price, color, image, cantidad } = action.payload;
            const productoExistente = state.productos.find((producto) => producto.id === id);

            if (productoExistente) {
                productoExistente.cantidad += cantidad;
            } else {
                state.productos.push({ id, title, price, color, image, cantidad });
            }
            state.cantidadTotal += cantidad;

            //Persistir datos en carrito
            localStorage.setItem("carrito", JSON.stringify(state.productos))
            localStorage.setItem("cantidadTotal", JSON.stringify(state.cantidadTotal.toString()))
        },
        ajustarCantidadProducto: (state, action) => {
            const { id, nuevaCantidad } = action.payload;
            const productoExistente = state.productos.find((producto) => producto.id === id);

            if (productoExistente) {
                if (nuevaCantidad <= 0) {
                    state.productos = state.productos.filter((producto) => producto.id !== id);
                } else {
                    state.cantidadTotal += nuevaCantidad - productoExistente.cantidad;
                    productoExistente.cantidad = nuevaCantidad;
                }
            }
            //Persistir datos en carrito
            localStorage.setItem("carrito", JSON.stringify(state.productos))
            localStorage.setItem("cantidadTotal", JSON.stringify(state.cantidadTotal.toString()))
        },
        limpiarCarrito: (state) => {
            state.productos = [];
            state.cantidadTotal = 0;

            //Borrar carrito
            localStorage.removeItem("carrito");
            localStorage.removeItem("cantidadTotal")
        },
        cargarCarrito: (state, action) => {
            state.productos = action.payload;
            // Actualizar cantidad total
            state.cantidadTotal = action.payload.reduce((total, producto) => total + producto.cantidad, 0);

            //Persistir cantidad total en el ls
            localStorage.setItem("cantidadTotal", state.cantidadTotal.toString())
        }
    },
});

export const { agregarProducto, ajustarCantidadProducto, limpiarCarrito, cargarCarrito } = carritoSlice.actions;
export const selectCarrito = (state) => state.carrito;
export default carritoSlice.reducer;
