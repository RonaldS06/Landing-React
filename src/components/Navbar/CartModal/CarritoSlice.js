// carritoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: [],
    cantidadTotal: 0,
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
        },
        limpiarCarrito: (state) => {
            state.productos = [];
            state.cantidadTotal = 0;
        }
    },
});

export const { agregarProducto, ajustarCantidadProducto, limpiarCarrito } = carritoSlice.actions;
export const selectCarrito = (state) => state.carrito;
export default carritoSlice.reducer;
