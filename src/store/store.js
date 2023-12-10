import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Productos/ProductSlice";
import carritoReducer from "../components/Navbar/CartModal/CarritoSlice"

const store = configureStore({
    reducer: {
        carrito: carritoReducer,
        products: productReducer,
    }
})

export default store;