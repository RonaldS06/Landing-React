import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  CardProductStyled,
  ContainerPricePurchaseStyled,
  ProductsContainerStyled,
  ProductsItemStyled,
} from "./ProductosStyled";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from "./ProductSlice";
import { ProductsArray } from "../../data/Products/DataProducts";
import {
  agregarProducto,
  cargarCarrito,
} from "../../components/Navbar/CartModal/CarritoSlice";
import AgregadoAlCarritoMensaje from "./AgregadoAlCarritoMensaje";
import PrecioFiltro from "./PrecioFiltro";

const TitleProducts = () => {
  return (
    <ProductsContainerStyled>
      <h2 id="productos">
        Nuestros <span>Productos</span>
      </h2>
      <h3>
        Descubre cómo puedes elevar tu estilo a través de la elección del
        calzado adecuado.
      </h3>
    </ProductsContainerStyled>
  );
};

const ProductsCard = ({
  id,
  title,
  price,
  color,
  image,
  mostrarMensajeCarrito,
}) => {
  const dispatch = useDispatch();
  const handleAgregarAlCarrito = () => {
    const nuevoProducto = {
      id,
      title,
      price,
      color,
      image,
      cantidad: 1,
    };

    dispatch(agregarProducto(nuevoProducto));
    mostrarMensajeCarrito(`¡${title} agregado al carrito 😎!`);
  };

  return (
    <CardProductStyled color={String(color)} id={id}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <ContainerPricePurchaseStyled>
        <p>${price}</p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <a onClick={handleAgregarAlCarrito}>Comprar</a>
        </motion.div>
      </ContainerPricePurchaseStyled>
    </CardProductStyled>
  );
};

const Productos = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [mensajeCarrito, setMensajeCarrito] = useState(null);
  const [filtroPrecio, setFiltroPrecio] = useState("menor");

  useEffect(() => {
    //Cargar carrito al cargar pagina
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    dispatch(cargarCarrito(carritoGuardado));

    dispatch(setProducts(ProductsArray));
  }, [dispatch]);

  const handleMostrarMensajeCarrito = (mensaje) => {
    setMensajeCarrito(mensaje);

    setTimeout(() => {
      setMensajeCarrito(null);
    }, 1500);
  };

  const handleFiltrarProductos = (filtro) => {
    // Lógica para ordenar productos por precio
    const productosFiltrados =
      filtro === "menor"
        ? [...products].sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          )
        : [...products].sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );

    dispatch(setProducts(productosFiltrados));
    setFiltroPrecio(filtro);
  };

  return (
    <>
      <Navbar />
      <TitleProducts />
      {/* componente de filtro de precios */}
      <PrecioFiltro onChange={handleFiltrarProductos} />
      <ProductsItemStyled>
        {products.map((producto) => (
          <ProductsCard
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            color={producto.color}
            image={producto.image}
            mostrarMensajeCarrito={handleMostrarMensajeCarrito}
          />
        ))}
      </ProductsItemStyled>
      {/* Mostrar el mensaje del carrito */}
      {mensajeCarrito && <AgregadoAlCarritoMensaje mensaje={mensajeCarrito} />}
      <Footer />
    </>
  );
};

export default Productos;
